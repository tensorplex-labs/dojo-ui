import { getFromLocalStorage } from '@/utils/general_helpers';
import { useState } from 'react';

interface UpdateWorkerPartnerResponse {
  success: boolean;
  body: {
    minerSubscriptionKey: string;
    name: string;
  };
  error: string | null;
}

const useUpdateWorkerPartner = () => {
  const [response, setResponse] = useState<UpdateWorkerPartnerResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateWorkerPartner = async (
    minerSubscriptionKey: string,
    newMinerSubscriptionKey: string,
    name: string
  ) => {
    setLoading(true);
    try {
      const payload = {
        minerSubscriptionKey: minerSubscriptionKey,
        newMinerSubscriptionKey: newMinerSubscriptionKey,
        name: name,
      };
      const jwtToken = getFromLocalStorage('jwtToken');
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/partner/edit`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(payload),
      });

      const data: UpdateWorkerPartnerResponse = await response.json();

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

  return { updateWorkerPartner, response, loading, error };
};

export default useUpdateWorkerPartner;