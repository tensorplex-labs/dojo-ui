import useFeature from '@/hooks/useFeature';
import { useSubmitTaskNew } from '@/hooks/useSubmitTaskNew';
import { RankOrder, SubmitContextType } from '@/types/ProvidersTypes';
import { CriterionWithResponses, Task } from '@/types/QuestionPageTypes';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { tokenType } from '@/utils/states';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

const SubmitContext = createContext<SubmitContextType | undefined>(undefined);

export const useSubmit = () => {
  const context = useContext(SubmitContext);
  if (!context) {
    throw new Error('useSubmit must be used within a SubmitProvider');
  }
  return context;
};

export const SubmitProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [criterionForResponse, setCriterionForResponse] = useState<CriterionWithResponses[]>([]);
  const jwtToken = getFromLocalStorage(tokenType);

  const [multiSelectData, setMultiSelectData] = useState<string[]>([]);
  const [rankingData, setRankingData] = useState<any>();
  const [scoreData, setScoreData] = useState<number>(0);
  const [multiScore, setMultiScore] = useState<any>();
  const [triggerTaskPageReload, setTriggerTaskPageReload] = useState<boolean>(false);
  const [submissionErr, setSubmissionErr] = useState<string | null>(null);
  const [isSubscriptionModalLoading, setIsSubscriptionModalLoading] = useState<boolean>(true);
  const [partnerCount, setPartnerCount] = useState(0);

  const [isMultiSelectQuestion, setIsMultiSelectQuestion] = useState<boolean>(false);
  const [isRankQuestion, setIsRankQuestion] = useState<boolean>(false);
  const [isMultiScore, setIsMultiScore] = useState<boolean>(false);
  const [isSlider, setIsSlider] = useState<boolean>(false);

  const [maxMultiScore, setMaxMultiScore] = useState<number>(0);
  const [minMultiScore, setMinMultiScore] = useState<number>(0);

  const { exp } = useFeature({ kw: 'demo' });

  const handleMaxMultiScore = (value: number) => {
    setMaxMultiScore(value);
  };

  const handleMinMultiScore = (value: number) => {
    setMinMultiScore(value);
  };

  const updateMultiSelect = (data: string[]) => {
    setMultiSelectData(data);
  };

  const updateRanking = (data: RankOrder) => {
    setRankingData(data);
  };

  const updateMultiScore = (data: { [key: string]: number }) => {
    setMultiScore(data);
  };

  const router = useRouter();
  const updateScore = (score: number) => {
    setScoreData(score);
  };
  // const { submitTask, response, error } = useSubmitTask();
  const { submitTask, error } = useSubmitTaskNew();

  // NEW INTEGRATION WITH LIVE BACKEND =================
  // Current impl: index is just the criterion label since each label has to be unique.
  const addCriterionForResponse = useCallback((index: string, value: string) => {
    console.log('Somebody is adding', index, value);
    setCriterionForResponse((prev) => {
      const updated = prev.map((c) => {
        const criterionTextId = index.split('::')[0];
        if (c.text !== criterionTextId) return c;

        // For multi select, we need check if the value was selected before
        if (c.type === 'multi-select') {
          c.responses = c.responses || []; //init incase empty
          if (c.responses.includes(value)) {
            return { ...c, responses: c.responses.filter((r) => r !== value) };
          }
          return { ...c, responses: [...c.responses, value] };
        } else if (c.type === 'multi-score') {
          //multi-score index will be in this format (id::score)
          const tmpResponses = c.responses || {}; //init incase empty
          const tmpArr = index.split('::');
          const modelId = tmpArr.length > 1 ? tmpArr[1] : '';
          tmpResponses[modelId] = value as any; //backend will check so frontend its important to be string or number
          return { ...c, responses: { ...tmpResponses } };
        } else {
          // Single Scoring, Single Select wise we only nede 1 value
          return { ...c, responses: value as any };
        }
      });
      return updated;
    });
  }, []);

  const getCriterionForResponse = useCallback(() => criterionForResponse, [criterionForResponse]);
  const resetCriterionForResponse = useCallback((task: Task) => {
    setCriterionForResponse([
      ...task.taskData.criteria.map((c) => ({ ...c, type: c.type as any, responses: undefined })),
    ]); //Setting up the initial state with responses
  }, []);
  const submitTaskNew = useCallback(async () => {
    //Prepare the results data first
    console.log('response received in context', criterionForResponse);
    const resultData = criterionForResponse.map((c) => {
      return { type: c.type, value: c.responses };
    });
    submitTask(resultData as any);
    //Then call the submit api
  }, [criterionForResponse]);
  // NEW INTEGRATION WITH LIVE BACKEND END =================

  // const handleSubmit = async () => {
  //   if (!router.isReady) return;

  //   const taskId = String(router.query.taskId || '');

  //   if (rankingData || scoreData || multiSelectData.length > 0 || multiScore) {
  //     console.log('submitting task');
  //     await submitTask(
  //       taskId,
  //       multiSelectData,
  //       rankingData,
  //       scoreData,
  //       multiScore,
  //       isMultiSelectQuestion,
  //       isRankQuestion,
  //       isMultiScore,
  //       isSlider,
  //       maxMultiScore,
  //       minMultiScore
  //     );
  //     if (error) {
  //       console.log('WORKED >>> ', error);
  //       setSubmissionErr(error);
  //       return;
  //     }
  //     setSubmissionErr(null);
  //     router.push('/task-list');
  //   }
  // };

  const handleSetIsMultiSelectQuestion = (value: boolean) => {
    setIsMultiSelectQuestion(value);
  };

  const handleSetIsRankQuestion = (value: boolean) => {
    setIsRankQuestion(value);
  };

  const handleSetIsMultiScore = (value: boolean) => {
    setIsMultiScore(value);
  };

  const handleSetIsSlider = (value: boolean) => {
    setIsSlider(value);
  };

  useEffect(() => {
    if (error) {
      setSubmissionErr(error);
    }
  }, [error]);

  return (
    <SubmitContext.Provider
      value={{
        multiSelectData,
        rankingData: rankingData || {},
        scoreData,
        multiScore,
        triggerTaskPageReload,
        updateMultiSelect,
        updateRanking: (data: string[]) =>
          updateRanking(Object.fromEntries(data.map((item, index) => [item, index.toString()]))),
        updateScore,
        handleSubmit: submitTaskNew,
        handleSubmitNew: submitTaskNew,
        setTriggerTaskPageReload,
        submissionErr,
        setSubmissionErr,
        isSubscriptionModalLoading,
        setIsSubscriptionModalLoading,
        partnerCount,
        setPartnerCount,
        updateMultiScore,
        isMultiSelectQuestion,
        isRankQuestion,
        isMultiScore,
        isSlider,
        maxMultiScore,
        minMultiScore,
        handleSetIsMultiSelectQuestion,
        handleSetIsRankQuestion,
        handleSetIsMultiScore,
        handleSetIsSlider,
        handleMaxMultiScore,
        handleMinMultiScore,
        addCriterionForResponse,
        getCriterionForResponse,
        resetCriterionForResponse,
      }}
    >
      {children}
    </SubmitContext.Provider>
  );
};
