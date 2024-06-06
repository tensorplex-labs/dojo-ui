import { useState } from 'react';

interface CreateSubscriptionKeyResponse {
  success: boolean;
  body: string;
  error: string | null;
}

interface SubscriptionKeyData {
  name: string;
  minerSubscriptionKey: string;
}

export const useCreateSubscriptionKey = () => {
  const [response, setResponse] = useState<CreateSubscriptionKeyResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSubscriptionKey = async (data: SubscriptionKeyData) => {
    setIsLoading(true);
    const jwtToken = localStorage.getItem('jwtToken'); // Ensure you have the JWT token available

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/worker/partner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to create subscription key');
      }
      setError('');
      setResponse(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createSubscriptionKey, response, isLoading, error };
};
