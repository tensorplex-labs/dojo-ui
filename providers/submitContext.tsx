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
  const {submitTask, response} = useSubmitTask();
  const handleSubmit = async() => {
    const taskId = String(router.query.taskId || '')
    if (rankingData && multiSelectData && scoreData && taskId) {
      await submitTask(taskId, multiSelectData, rankingData, scoreData);
      if(response){
          router.push('/')
      }
    } else {
      alert("Please fill all the data to continue")
    }
  }
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
      setTriggerTaskPageReload    }}>
      {children}
    </SubmitContext.Provider>
  );
};