import { Task } from '@/types/QuestionPageTypes';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { useEffect, useState } from 'react';

const useRequestTaskByTaskID = (taskId: string, isConnected: boolean, isAuthenticated: boolean) => {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
    const jwtToken = getFromLocalStorage(tokenType);
    const fetchTask = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setTask(data.body);
        } else {
          setError(data.error || `HTTP error! status: ${response.status}`);
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    if (isConnected && isAuthenticated && taskId) {
      fetchTask();
    } else {
      setTask(null);
    }
  }, [taskId, isConnected, isAuthenticated]); // jwtToken is not a dependency anymore since it's fetched inside the effect

  return { task, loading, error };
};

export default useRequestTaskByTaskID;
