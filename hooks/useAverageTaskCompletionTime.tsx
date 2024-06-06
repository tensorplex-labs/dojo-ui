import { useEffect, useState } from 'react';

interface AverageTaskCompletionTimeResponse {
  success: boolean;
  body: {
    averageTaskCompletionTime: string;
  } | null;
  error: string | null;
}

const useAverageTaskCompletionTime = () => {
  const [averageTaskCompletionTime, setAverageTaskCompletionTime] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAverageTaskCompletionTime = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/metrics/average-task-completion-time`
        );
        const data: AverageTaskCompletionTimeResponse = await response.json();

        if (data.success && data.body) {
          setAverageTaskCompletionTime(parseInt(data.body.averageTaskCompletionTime, 10));
          setError(null);
        } else {
          setAverageTaskCompletionTime(null);
          setError(data.error || 'Unknown error occurred');
        }
      } catch (error) {
        setAverageTaskCompletionTime(null);
        setError('Failed to fetch average task completion time');
      } finally {
        setLoading(false);
      }
    };

    fetchAverageTaskCompletionTime();
  }, []);

  return { averageTaskCompletionTime, loading, error };
};

export default useAverageTaskCompletionTime;
