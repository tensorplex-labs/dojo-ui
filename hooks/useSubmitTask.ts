import { useState } from 'react';

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

const useSubmitTask = (jwtToken: string) => {
  const [response, setResponse] = useState<SubmitTaskResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const submitTask = async (taskId: string, resultData: ResultDataItem[]) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/tasks/submit-task/${taskId}/`, {
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

  return { submitTask, response, loading, error };
};

export default useSubmitTask;