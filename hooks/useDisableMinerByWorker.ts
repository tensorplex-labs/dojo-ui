import { getFromLocalStorage } from '@/utils/general_helpers';
import { useState } from 'react';

interface DisableMinerResponse {
  success: boolean;
  body: string;
  error: string | null;
}

const useDisableMinerByWorker = () => {
  const [response, setResponse] = useState<DisableMinerResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const jwtToken = getFromLocalStorage('jwtToken');

  const disableMinerByWorker = async (minerSubscriptionKey: string, toDisable: boolean) => {
    setLoading(true);

    try {
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/worker/partner/disable`;
      const payload = {
        minerSubscriptionKey: minerSubscriptionKey,
        toDisable: toDisable
      };
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify(payload),
      });

      const data: DisableMinerResponse = await response.json();

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

  return { disableMinerByWorker, response, loading, error };
};

export default useDisableMinerByWorker;