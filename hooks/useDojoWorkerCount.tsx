import { useEffect, useState } from 'react';

interface DojoWorkerCountResponse {
  success: boolean;
  body: {
    numDojoWorkers: string;
  } | null;
  error: string | null;
}

const useDojoWorkerCount = () => {
  const [numDojoWorkers, setNumDojoWorkers] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDojoWorkerCount = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/metrics/dojo-worker-count`);
        const data: DojoWorkerCountResponse = await response.json();

        if (data.success && data.body) {
          setNumDojoWorkers(parseInt(data.body.numDojoWorkers, 10));
          setError(null);
        } else {
          setNumDojoWorkers(null);
          setError(data.error || 'Unknown error occurred');
        }
      } catch (error) {
        setNumDojoWorkers(null);
        setError('Failed to fetch Dojo worker count');
      } finally {
        setLoading(false);
      }
    };

    fetchDojoWorkerCount();
  }, []);

  return { numDojoWorkers, loading, error };
};

export default useDojoWorkerCount;
