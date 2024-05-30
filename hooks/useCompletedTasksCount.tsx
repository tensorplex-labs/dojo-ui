import { useEffect, useState } from 'react';

enum MetricsType {
  TOTAL_NUM_COMPLETED_TASKS = 'total_num_completed_tasks',
}

interface CompletedTasksCountResponse {
  success: boolean;
  body: {
    numCompletedTasks: string;
  } | null;
  error: string | null;
}

const useCompletedTasksCount = () => {
  const [numCompletedTasks, setNumCompletedTasks] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompletedTasksCount = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/metrics/completed-tasks-count`);
        const data: CompletedTasksCountResponse = await response.json();

        if (data.success && data.body) {
          setNumCompletedTasks(parseInt(data.body.numCompletedTasks, 10));
          setError(null);
        } else {
          setNumCompletedTasks(null);
          setError(data.error || 'Unknown error occurred');
        }
      } catch (error) {
        setNumCompletedTasks(null);
        setError('Failed to fetch completed tasks count');
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedTasksCount();
  }, []);

  return { numCompletedTasks, loading, error };
};

export default useCompletedTasksCount;