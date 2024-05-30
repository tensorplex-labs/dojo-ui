import useSubmitTask from '@/hooks/useSubmitTask';
import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface SubmitContextType {
  multiSelectData: string[];
  rankingData: any;
  scoreData: number;
  multiScore: { [key: string]: number };
  updateMultiSelect: (data: string[]) => void;
  updateRanking: (data: string[]) => void;
  updateScore: (score: number) => void;
  updateMultiScore: (data: { [key: string]: number }) => void;
  handleSubmit: Function;
  triggerTaskPageReload: boolean;
  setTriggerTaskPageReload: React.Dispatch<React.SetStateAction<boolean>>;
  submissionErr: string | null;
  setSubmissionErr: Function;
  isSubscriptionModalLoading: boolean;
  setIsSubscriptionModalLoading: Function;
  partnerCount: number;
  setPartnerCount: React.Dispatch<React.SetStateAction<number>>;
  isMultiSelectQuestion: boolean;
  isRankQuestion: boolean;
  isMultiScore: boolean;
  isSlider: boolean;
  handleSetIsMultiSelectQuestion: (value: boolean) => void;
  handleSetIsRankQuestion: (value: boolean) => void;
  handleSetIsMultiScore: (value: boolean) => void;
  handleSetIsSlider: (value: boolean) => void;
  maxMultiScore: number;
  minMultiScore: number;
  handleMaxMultiScore: (value: number) => void;
  handleMinMultiScore: (value: number) => void;

}

const SubmitContext = createContext<SubmitContextType | undefined>(undefined);

export const useSubmit = () => {
  const context = useContext(SubmitContext);
  if (!context) {
    throw new Error('useSubmit must be used within a SubmitProvider');
  }
  return context;
};

type RankOrder = { [key: string]: string };

export const SubmitProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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

  const handleMaxMultiScore = (value: number) => {
    setMaxMultiScore(value);
  }

  const handleMinMultiScore = (value: number) => {
    setMinMultiScore(value);
  }

  const updateMultiSelect = (data: string[]) => {
    setMultiSelectData(data);
    console.log(multiSelectData);
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
  const { submitTask, response, error } = useSubmitTask();
  const handleSubmit = async () => {
    if (!router.isReady) return;

    const taskId = String(router.query.taskId || '');

    if (rankingData || scoreData || multiSelectData.length > 0 || multiScore) {
      console.log('submitting task');      
      await submitTask(taskId, multiSelectData, rankingData, scoreData, multiScore, isMultiSelectQuestion, isRankQuestion, isMultiScore, isSlider, maxMultiScore, minMultiScore);
      if (error) {
        console.log('WORKED >>> ', error);
        setSubmissionErr(error);
        return;
      }
      setSubmissionErr(null);
      router.push('/');
    }
  };

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
        handleSubmit,
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
      }}
    >
      {children}
    </SubmitContext.Provider>
  );
};
