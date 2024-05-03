import { useState } from 'react';

interface ResultDataItem {
  type: string;
  value: any;
}

interface SubmitTaskResponse {
  success: string;
  body: {
    numResults: number;
  };
  error: null | string;
}

const useSubmitTaskByWorker = (jwtToken: string) => {
  const [response, setResponse] = useState<SubmitTaskResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submitTaskByWorker = async (taskId: string, resultData: ResultDataItem[]) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/submit-task/${taskId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({ taskId, resultData }),
      });
      const data: SubmitTaskResponse = await response.json();
      if (response.ok) {
        setResponse(data);
      } else {
        setError(data.error || `HTTP error! status: ${response.status}`);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitTaskByWorker, response, loading, error };
};

export default useSubmitTaskByWorker;