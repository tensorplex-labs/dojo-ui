import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitTaskResponse } from './useSubmitTask';
interface submitTaskProps {}

export const useSubmitTaskNew = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const submitTask = async (submitPayload: { type: any; value: any }) => {
    setLoading(true);
    console.log('submit payload before going to api', submitPayload);
    const taskId = String(router.query.taskId || '');
    const jwtToken = localStorage.getItem('token');
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/submit-result/${taskId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        resultData: submitPayload,
      }),
    });
    const data: SubmitTaskResponse = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(data.error || `HTTP error! status: ${response.status}`);
    }
  };
  return { submitTask, loading, error };
};
