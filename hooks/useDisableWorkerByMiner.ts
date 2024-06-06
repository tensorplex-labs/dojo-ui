import { useState } from 'react';

interface DisableWorkerResponse {
  success: boolean;
  body: string;
  error: string | null;
}

const useDisableWorkerByMiner = () => {
  const [response, setResponse] = useState<DisableWorkerResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const disableWorkerByMiner = async (workerId: string, toDisable: boolean) => {
    setLoading(true);
    try {
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/miner/partner/disable`;
      const payload = {
        worker_id: workerId,
        to_disable: toDisable,
      };

      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data: DisableWorkerResponse = await response.json();

      if (response.ok) {
        setResponse(data);
      } else {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { disableWorkerByMiner, response, loading, error };
};

export default useDisableWorkerByMiner;
