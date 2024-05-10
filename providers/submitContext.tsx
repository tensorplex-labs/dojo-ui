import useSubmitTask from '@/hooks/useSubmitTask';
import { useRouter } from 'next/router';
import React, { createContext, useContext, ReactNode, useState, useCallback, useEffect } from 'react';

interface SubmitContextType {
  multiSelectData: string[];
  rankingData: any;
  scoreData: number;
  updateMultiSelect: (data: string[]) => void;
  updateRanking: (data: string[]) => void;
  updateScore: (score: number) => void;
  handleSubmit: Function;
  triggerTaskPageReload: boolean;
  setTriggerTaskPageReload: Function;
  submissionErr: string | null;
  setSubmissionErr: Function;
  isSubscriptionModalLoading: boolean;
  setIsSubscriptionModalLoading: Function;
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

export const SubmitProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [multiSelectData, setMultiSelectData] = useState<string[]>([]);
  const [rankingData, setRankingData] = useState<any>();
  const [scoreData, setScoreData] = useState<number>(0);
  const [triggerTaskPageReload, setTriggerTaskPageReload] = useState<boolean>(false);
  const [submissionErr, setSubmissionErr] = useState<string | null>(null);
  const [isSubscriptionModalLoading, setIsSubscriptionModalLoading] = useState<boolean>(true);
  const updateMultiSelect = (data: string[]) => {
    setMultiSelectData(data);
    console.log(multiSelectData)
  };

  const updateRanking = (data: RankOrder) => {
    setRankingData(data);
  };
  const router = useRouter();
  const updateScore = (score: number) => {
    setScoreData(score);
  };
  const {submitTask, response, error} = useSubmitTask();
  const handleSubmit = async() => {
    const taskId = String(router.query.taskId || '')
    // console.log({rankingData}, {scoreData}, {taskId}, {multiSelectData})
    if (rankingData && scoreData && taskId) {
      await submitTask(taskId, multiSelectData, rankingData, scoreData);
      if(error){
        console.log('WORKED >>> ',error)
        setSubmissionErr(error)
      }
      if(response){
        setSubmissionErr(null)
        router.push('/')
      }
    }
  }
  useEffect(() => {
    if(error){
      setSubmissionErr(error)
    }
  }, [error])
  {console.log(submissionErr)}
  return (
    <SubmitContext.Provider value={{
      multiSelectData,
      rankingData: rankingData || {},
      scoreData,
      triggerTaskPageReload,
      updateMultiSelect,
      updateRanking: (data: string[]) => updateRanking(Object.fromEntries(data.map((item, index) => [item, index.toString()]))),
      updateScore,
      handleSubmit,
      setTriggerTaskPageReload,
      submissionErr,
      setSubmissionErr,
      isSubscriptionModalLoading,
      setIsSubscriptionModalLoading   }}>
      {children}
    </SubmitContext.Provider>
  );
};