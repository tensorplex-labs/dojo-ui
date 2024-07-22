import { getFromLocalStorage } from '@/utils/general_helpers';
import { useCallback, useEffect, useState } from 'react';

interface Partner {
  createdAt: any;
  subscriptionKey: any;
  id: string;
  name: string;
  // Add other relevant fields
}

interface UsePartnerListResult {
  partners: Partner[];
  isLoading: boolean;
  error: Error | null;
}

export const usePartnerList = (refetchDependency: any): UsePartnerListResult => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPartners = useCallback(async () => {
    const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
    const jwtToken = getFromLocalStorage(tokenType);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/worker/partner/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPartners(data.body.partners); // Assuming the JSON response is an array of partners
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners, refetchDependency]);

  return { partners, isLoading, error };
};