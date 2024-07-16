import { Button } from '@/components/Button';
import DragnDrop from '@/components/DragnDrop';
import LinkContentVisualizer from '@/components/LinkContentVisualizer';
import ModalContainer from '@/components/ModalContainer';
import MultiSelect from '@/components/MultileSelect';
import Slider from '@/components/Slider';
import { useJwtToken } from '@/hooks/useJwtToken';
import useRequestTaskByTaskID from '@/hooks/useRequestTaskByTaskID';
import { useSIWE } from '@/hooks/useSIWE';
import useSubmitTask from '@/hooks/useSubmitTask';
import Layout from '@/layout';
import { useAuth } from '@/providers/authContext';
import { useSubmit } from '@/providers/submitContext';
import { cn } from '@/utils/tw';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

type QuestionPageProps = {
  children: ReactNode;
};

type RankOrder = { [key: string]: string };

export const taskCriteria = {
  multiSelect: 'multi-select',
  ranking: 'ranking',
  score: 'score',
} as const;

export type TaskCriteria = (typeof taskCriteria)[keyof typeof taskCriteria];

const HeadingTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="mx-auto flex w-[1200px] flex-col">
      <p className={`text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>{title}</p>
      <p className=" mb-4 flex self-start font-semibold opacity-60">{subTitle}</p>
    </div>
  );
};

const QuestionPage: React.FC<QuestionPageProps> = ({ children }) => {
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
  const [rankAnswer, setRankAnswer] = useState<RankOrder>();
  const [isMultiSelectQuestion, setIsMultiSelectQuestion] = useState<boolean>(false);
  const [isRankQuestion, setIsRankQuestion] = useState<boolean>(false);
  const [isSlider, setisSlider] = useState<boolean>(false);
  const [isMultiScore, setIsMultiScore] = useState<boolean>(false);
  const [minValSlider, setMinValSlider] = useState<number>(1); // [1]
  const [maxValSlider, setMaxValSlider] = useState<number>(10); // [1]
  const [taskType, setTaskType] = useState<string>('');
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [titleForSlider, setTitleForSlider] = useState<string>(''); // [1
  const [titleForRanking, setTitleForRanking] = useState<string>(''); // [1
  const [titleForMultiSelect, setTitleForMultiSelect] = useState<string>(''); // [1
  const [titleForMultiScore, setTitleForMultiScore] = useState<string>(''); // [1
  // State for the selected values in the multi-select radio component
  const [selectedMultiSelectValues, setSelectedMultiSelectValues] = useState<string[]>([]);
  // Handler for changes in the draggable items order
  const handleOrderChange = (newOrder: string[]) => {
    const newRankAnswer: RankOrder = {};
    newOrder.forEach((value, index) => {
      newRankAnswer[value] = index.toString();
    });
    setRankAnswer(newRankAnswer);
    updateRanking(newOrder);
  };

  const [taskId, setTaskId] = useState<string>(''); // [1
  const [multiSelectQuestionData, setMultiSelectQuestionData] = useState<string[]>([]);
  const [rankQuestionData, setRankQuestionData] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState<number>(1); // Initial value set to 1, adjust as necessary
  const [open, setOpen] = useState(false);
  const [minScoreSlider, setMinScoreSlider] = useState<number>(0);
  const [maxScoreSlider, setMaxScoreSlider] = useState<number>(0);
  const { task, loading: isTaskLoading } = useRequestTaskByTaskID(taskId);
  const [multiScoreOptions, setMultiScoreOptions] = useState<string[]>([]);
  const [percentage, setPercentage] = useState(0);
  const { error } = useSubmitTask();
  const router = useRouter();

  const { address } = useAccount();
  const { isAuthenticated, isSignedIn } = useAuth();
  const { isConnected } = useAccount();
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
        case 'multi-score': // Handling new case
          setIsMultiScore(true);
          handleSetIsMultiScore(true);
          criterion.min && setMinScoreSlider(criterion.min);
          criterion.max && setMaxScoreSlider(criterion.max);
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
      setTitleForMultiSelect('');

      setIsRankQuestion(false);
      setRankQuestionData([]);
      handleSetIsRankQuestion(false);
      setTitleForRanking('');

      setIsMultiScore(false);
      handleSetIsMultiScore(false);
      setMinScoreSlider(0);
      setMaxScoreSlider(0);
      handleMinMultiScore(0);
      handleMaxMultiScore(0);
      setMultiScoreOptions([]);
      setTitleForMultiScore('');

      setisSlider(false);
      handleSliderChange(1);
      handleSetIsSlider(false);
      setMinValSlider(1);
      setMaxValSlider(10);
      setTitleForSlider('');
    };
  }, [task]);

  useEffect(() => {
    if (task && multiScoreOptions) {
      const defaultRatings = task.taskData.responses.reduce((acc, _, index) => {
        if (index < multiScoreOptions.length) {
          const modelKey = multiScoreOptions[index];
          acc[modelKey] = Math.floor(maxValSlider / 2);
          acc[modelKey] = Math.floor(maxValSlider / 2);
        }
        return acc;
      }, {});
      console.log('defaultRatings', defaultRatings);
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
    setSliderValue(value);
    updateScore(value);
  };
  const handleSliderPercentage = (value: number) => {
    setPercentage(value);
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
    console.log('Received new rating:', newRating, '>>>', model); // Log the received new rating

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
        <div className="mx-auto flex w-[1200px] flex-col">
          <p className={`text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>
            {task?.title}
            {`  `}
            <span
              className={`${FontSpaceMono.className}  rounded-[20px] border border-black bg-[#D0A215] px-2.5 py-[5px] text-[13px] font-bold text-white`}
            >
              {taskType} PROMPT
            </span>
          </p>
          <div
            className={`${FontManrope.className}  my-5 flex self-start whitespace-pre-wrap rounded-xl border-2 border-black bg-[#F6F6E6] p-5 text-left text-base font-medium opacity-60`}
          >
            {formattedPrompt}
          </div>
        </div>
        <hr className={' mb-8 mt-3 w-full border-2 border-black'} />
        {isMultiScore && (
          <HeadingTitle
            title={`Question 1`}
            subTitle="Draft the respective slider for each output according to how close the interface matches the following prompt"
          />
        )}
        <div className="grid w-full max-w-[1200px] grid-cols-2 gap-x-5 gap-y-10">
          {task?.taskData?.responses?.map(
            (
              plot: {
                id: React.Key | null | undefined;
                model: string;
                htmlContent: string;
                title: string;
                showTitle: boolean;
                completion: { sandbox_url: string };
              },
              index
            ) => (
              <LinkContentVisualizer
                key={plot.id}
                title={plot.model}
                showTitle={true}
                url={plot.completion.sandbox_url}
                sliderSettings={{
                  min: minValSlider,
                  max: maxValSlider,
                  step: 1,
                  initialValue: ratings[multiScoreOptions[index]],
                }}
                onRatingChange={(rating) => handleRatingChange(multiScoreOptions[index], rating)}
                showSlider={isMultiScore}
                ratingData={ratings[multiScoreOptions[index]]}
              />
            )
          )}
        </div>

        {!isTaskLoading && isSlider && (
          <>
            <hr className={'mt-4 w-full border border-black opacity-10'} />
            <div className=" mx-auto my-4 flex max-w-[1200px] flex-col justify-center">
              <HeadingTitle title={`Question ${isMultiScore ? '2' : '1'}`} subTitle="Rate the output" />
              <div className="mt-4 w-[541px]">
                <div className="row-start-2 rounded-br-lg ">
                  {/* <p className={`${FontManrope.className} mb-[16px] text-base font-bold opacity-60`}>Rate from 1 (negative) to 10 (positive)</p> */}
                  <Slider min={1} max={10} step={1} initialValue={1} onChange={handleSliderChange} showSections />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!isTaskLoading && isMultiSelectQuestion && (
        <>
          <hr className={'w-full border border-black opacity-10'} />
          <div className=" mx-auto my-4 flex max-w-[1200px] flex-col justify-center">
            {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">Please evaluate the coding question, and answer accordingly.</p> */}
            <HeadingTitle
              title={`Question ${isMultiScore && isSlider ? '3' : isSlider || isMultiScore ? '2' : '1'}`}
              subTitle="Please choose the most appropriate option"
            />{' '}
            <div className=" flex w-[610px] flex-col items-center justify-center rounded-b-xl ">
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
            {/* <p className="text-center flex self-start font-semibold opacity-60 mb-4">Which animation best represent an animated solar system? The slider should speed up the animation.</p> */}
            <div className="flex w-full justify-start">
              <div className="w-[780px] bg-[#FFFFF4]">
                <HeadingTitle
                  title={`Question ${isMultiScore && isSlider && isMultiSelectQuestion ? '4' : isMultiScore && isSlider ? '3' : isMultiScore && isMultiSelectQuestion ? '3' : isSlider && isMultiSelectQuestion ? '3' : isMultiScore ? '2' : isSlider ? '2' : isMultiSelectQuestion ? '2' : '1'}`}
                  subTitle="Rank the following options according to how well they match the prompt"
                />
                <DragnDrop options={rankQuestionData} onOrderChange={handleOrderChange} />
              </div>
            </div>
          </div>
        </>
      )}
      <ModalContainer
        className={'h-[206px] w-[512px]'}
        headerClassName={'h-12 pl-4'}
        bodyClassName="p-0"
        header={'Error'}
        open={open}
        onClose={() => handleOnClose()}
        onSave={() => handleOnClose()}
      >
        <div
          className={cn(
            `${FontManrope.className} py-4 px-6 border-b-2 border-black bg-accent opacity-60 text-[16px] leading-[120%] h-[88px] flex items-center`
          )}
        >
          <span>{submissionErr}</span>
        </div>
        <div className={'size-full p-1 text-right'}>
          <Button
            className={cn('w-[85px] h-[39px] mt-2 mr-4 hover:shadow-brut-sm text-[16px] text-white')}
            buttonText={'CLOSE'}
            onClick={() => handleOnClose()}
          />
        </div>
      </ModalContainer>
    </Layout>
  );
};

export default QuestionPage;

{
  /* {questionMultiSelectData.map(plot => (
            <HTMLContentVisualizer
              key={plot.id}
              htmlContent={plot.htmlContent}
              title={plot.title}
              showTitle={plot.showTitle}
            />
          ))} */
}
