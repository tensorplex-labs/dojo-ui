import HeadingTitle from '@/components/Common/HeadingTitle';
import MultiSelect from '@/components/Common/MultileSelect';
import DragnDrop from '@/components/QuestionPageComponents/DragnDrop';
import ErrorModal from '@/components/QuestionPageComponents/ErrorModal';
import ResponseVisualizer from '@/components/QuestionPageComponents/ResponseVisualizer';
import SliderQuestion from '@/components/QuestionPageComponents/SliderQuestion';
import TaskPrompt from '@/components/QuestionPageComponents/TaskPrompt';
import { taskCriteria } from '@/constants';
import { useJwtToken } from '@/hooks/useJwtToken';
import useRequestTaskByTaskID from '@/hooks/useRequestTaskByTaskID';
import { useSIWE } from '@/hooks/useSIWE';
import Layout from '@/layout';
import { useAuth } from '@/providers/authContext';
import { useSubmit } from '@/providers/submitContext';
import { QuestionPageProps, RankOrder } from '@/types/QuestionPageTypes';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

const QuestionPage: React.FC<QuestionPageProps> = () => {
  const {
    updateMultiSelect,
    updateRanking,
    updateScore,
    updateMultiScore,
    submissionErr,
    setSubmissionErr,
    handleSetIsMultiSelectQuestion,
    handleSetIsRankQuestion,
    handleSetIsMultiScore,
    handleSetIsSlider,
    handleMaxMultiScore,
    handleMinMultiScore,
  } = useSubmit();
  const [isMultiSelectQuestion, setIsMultiSelectQuestion] = useState<boolean>(false);
  const [isRankQuestion, setIsRankQuestion] = useState<boolean>(false);
  const [isSlider, setisSlider] = useState<boolean>(false);
  const [isMultiScore, setIsMultiScore] = useState<boolean>(false);
  const [minValSlider, setMinValSlider] = useState<number>(1);
  const [maxValSlider, setMaxValSlider] = useState<number>(10);
  const [taskType, setTaskType] = useState<string>('');
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [selectedMultiSelectValues, setSelectedMultiSelectValues] = useState<string[]>([]);

  const handleOrderChange = (newOrder: string[]) => {
    const newRankAnswer: RankOrder = {};
    newOrder.forEach((value, index) => {
      newRankAnswer[value] = index.toString();
    });
    updateRanking(newOrder);
  };

  const [taskId, setTaskId] = useState<string>('');
  const [multiSelectQuestionData, setMultiSelectQuestionData] = useState<string[]>([]);
  const [rankQuestionData, setRankQuestionData] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const { isAuthenticated, isSignedIn } = useAuth();
  const { isConnected, address } = useAccount();
  const {
    task,
    loading: isTaskLoading,
    error: taskError,
  } = useRequestTaskByTaskID(taskId, isConnected, isAuthenticated);
  const [multiScoreOptions, setMultiScoreOptions] = useState<string[]>([]);
  const router = useRouter();

  const { disconnect } = useDisconnect();
  const { signInWithEthereum } = useSIWE(() => console.log('post signin'));
  const jwtTokenKey = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;

  const jwtToken = useJwtToken();
  useEffect(() => {
    if (!isAuthenticated && isConnected && isSignedIn) {
      signInWithEthereum(address ?? '');
    }
  }, [isAuthenticated, isConnected, isSignedIn]);
  useEffect(() => {
    if (jwtToken) {
      console.log('User is authenticated');
    }
  }, [jwtToken]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'wagmi.io.metamask.disconnected') {
        window.location.reload();
      }
      if (event.key === jwtTokenKey) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [disconnect]);

  useEffect(() => {
    const { taskId } = router.query;
    if (router.isReady && taskId && typeof taskId === 'string') {
      setTaskId(taskId);
    }
  }, [router]);

  useEffect(() => {
    if (task) {
      setTaskType(task.type.replace(/_/g, ' '));
    }
    task?.taskData.criteria.forEach((criterion) => {
      switch (criterion.type) {
        case taskCriteria.multiSelect:
          setIsMultiSelectQuestion(true);
          criterion.options && setMultiSelectQuestionData(criterion.options);
          setSelectedMultiSelectValues([]);
          handleSetIsMultiSelectQuestion(true);
          break;
        case taskCriteria.ranking:
          setIsRankQuestion(true);
          setRankQuestionData([]);
          handleSetIsRankQuestion(true);
          if (criterion.options) {
            setRankQuestionData(criterion.options);
            updateRanking(criterion.options);
          }
          break;
        case 'multi-score':
          setIsMultiScore(true);
          handleSetIsMultiScore(true);
          criterion.min && handleMinMultiScore(criterion.min);
          criterion.max && handleMaxMultiScore(criterion.max);
          criterion.options && setMultiScoreOptions(criterion.options);
          break;
        case taskCriteria.score:
          setisSlider(true);
          handleSliderChange(1);
          handleSetIsSlider(true);
          criterion.min && setMinValSlider(criterion.min);
          criterion.max && setMaxValSlider(criterion.max);
          break;
        default:
          console.log(`Unhandled criterion type: ${criterion.type}`);
      }
    });
    return () => {
      setIsMultiSelectQuestion(false);
      setMultiSelectQuestionData([]);
      setSelectedMultiSelectValues([]);
      handleSetIsMultiSelectQuestion(false);

      setIsRankQuestion(false);
      setRankQuestionData([]);
      handleSetIsRankQuestion(false);

      setIsMultiScore(false);
      handleSetIsMultiScore(false);
      handleMinMultiScore(0);
      handleMaxMultiScore(0);
      setMultiScoreOptions([]);

      setisSlider(false);
      handleSliderChange(1);
      handleSetIsSlider(false);
      setMinValSlider(1);
      setMaxValSlider(10);
    };
  }, [task]);

  useEffect(() => {
    if (task && multiScoreOptions) {
      const defaultRatings = task.taskData.responses.reduce((acc, _, index) => {
        if (index < multiScoreOptions.length) {
          const modelKey = multiScoreOptions[index];
          (acc as any)[modelKey] = Math.floor(maxValSlider / 2);
        }
        return acc;
      }, {});
      setRatings(defaultRatings);
      updateMultiScore(defaultRatings);
    } else {
      setRatings({});
      updateMultiScore({});
    }
  }, [task, multiScoreOptions, maxValSlider]);
  useEffect(() => {
    return () => {
      updateMultiScore({});
      setRatings({});
      handleSetIsMultiSelectQuestion(false);
      handleSetIsRankQuestion(false);
      handleSetIsMultiScore(false);
      handleSetIsSlider(false);
      setSubmissionErr(null);
    };
  }, []);

  const handleSelectionChange = (newValue: string) => {
    setSelectedMultiSelectValues((prevValues) => {
      const newValues = prevValues.includes(newValue)
        ? prevValues.filter((value) => value !== newValue)
        : [...prevValues, newValue];
      updateMultiSelect(newValues);
      return newValues;
    });
  };
  const handleSliderChange = (value: number) => {
    updateScore(value);
  };
  const formattedPrompt = useMemo(() => {
    return task?.taskData?.prompt?.split('\\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }, [task]);
  const route = useRouter();

  const handleOnClose = () => {
    setSubmissionErr(null);
    setOpen(false);
    route.push('/');
  };
  const handleRatingChange = (model: string, newRating: number) => {
    setRatings((prevRatings) => {
      const updatedRatings = {
        ...prevRatings,
        [model]: newRating,
      };
      updateMultiScore(updatedRatings);
      return updatedRatings;
    });
  };

  useEffect(() => {
    if (submissionErr) {
      setOpen(true);
    }
  }, [submissionErr]);

  useEffect(() => {
    setSubmissionErr(null);
    updateMultiScore({});
    setRatings({});
  }, []);

  return (
    <Layout isFullWidth>
      <div className=" my-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1200px]">
          <TaskPrompt title={task?.title} taskType={taskType} formattedPrompt={formattedPrompt} />
        </div>
        <hr className={' mb-8 mt-3 w-full border-t-2 border-black'} />
        {isMultiScore && (
          <HeadingTitle
            title={`Question 1`}
            subTitle="Draft the respective slider for each output according to how close the interface matches the following prompt"
          />
        )}
        {!isTaskLoading && !taskError && task && (
          <ResponseVisualizer
            task={task}
            minValSlider={minValSlider}
            maxValSlider={maxValSlider}
            ratings={ratings}
            multiScoreOptions={multiScoreOptions}
            isMultiScore={isMultiScore}
            handleRatingChange={handleRatingChange}
          />
        )}

        {!isTaskLoading && isSlider && (
          <>
            <hr className={'mt-4 w-full border border-black opacity-10'} />
            <SliderQuestion isMultiScore={isMultiScore} handleSliderChange={handleSliderChange} />
          </>
        )}
      </div>
      {!isTaskLoading && isMultiSelectQuestion && (
        <>
          <hr className={'w-full border border-black opacity-10'} />
          <div className=" mx-auto my-4 flex max-w-[1200px] flex-col justify-center">
            <HeadingTitle
              title={`Question ${isMultiScore && isSlider ? '3' : isSlider || isMultiScore ? '2' : '1'}`}
              subTitle="Please choose the most appropriate option"
            />{' '}
            <div className=" flex w-[610px] flex-col items-center justify-center rounded-b-xl md:px-4 md:py-2 lg:px-4 lg:py-2">
              <MultiSelect
                options={multiSelectQuestionData}
                selectedValues={selectedMultiSelectValues}
                onSelectionChange={handleSelectionChange}
              />
            </div>
          </div>
        </>
      )}
      {!isTaskLoading && isRankQuestion && (
        <>
          <hr className={'w-full border border-black opacity-10'} />
          <div className="mx-auto my-4 flex max-w-[1200px] flex-col items-center justify-center">
            <div className="flex w-full justify-start">
              <div className="w-[780px] bg-primaryBG-bg">
                <HeadingTitle
                  title={`Question ${isMultiScore && isSlider && isMultiSelectQuestion ? '4' : isMultiScore && isSlider ? '3' : isMultiScore && isMultiSelectQuestion ? '3' : isSlider && isMultiSelectQuestion ? '3' : isMultiScore ? '2' : isSlider ? '2' : isMultiSelectQuestion ? '2' : '1'}`}
                  subTitle="Rank the following options according to how well they match the prompt"
                />
                <div className="md:px-4 md:py-2 lg:px-4 lg:py-2">
                  <DragnDrop options={rankQuestionData} onOrderChange={handleOrderChange} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ErrorModal open={open} onClose={handleOnClose} errorMessage={submissionErr} />
    </Layout>
  );
};

export default QuestionPage;
