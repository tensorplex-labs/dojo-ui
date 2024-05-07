import { getFromLocalStorage } from '@/utils/general_helpers';
import { useEffect, useState } from 'react';

interface SubmitTaskResponse {
  success: string;
  body: {
    numResults: number;
  };
  error: null | string;
}

interface ResultDataItem {
  type: string;
  value: any;
}

interface SubmitTaskPayload {
  taskId: string;
  criteria: any[]; // This should be detailed according to the actual criteria structure
  resultData: ResultDataItem[];
}

const useSubmitTask =  () => {
  const [response, setResponse] = useState<SubmitTaskResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const jwtToken = getFromLocalStorage('jwtToken');
  type RankOrder = { [key: string]: string };
  const submitTask = async ( taskId: string, multiSelectData: string[], rankingData: RankOrder, scoreData: number) => {
    setLoading(true);
    console.log(taskId)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/submit-result/${taskId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({  multiSelectData, rankingData, scoreData}),
      });
      const data: SubmitTaskResponse = await response.json();
      if (response.ok) {
        setResponse(data);
        window.location.href = '/';
      } else {
        setError(data.error || `HTTP error! status: ${response.status}`);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitTask, response, loading, error };
};

export default useSubmitTask;