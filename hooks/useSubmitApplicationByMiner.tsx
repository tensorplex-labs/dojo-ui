import { getFromLocalStorage } from '@/utils/general_helpers';
import { useState } from 'react';

interface ApplicationData {
  hotkey: string;
  organisationName?: string;
  email: string;
}

interface SubmissionResponse {
  success: boolean;
  message: string;
}

export const useSubmitApplication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<SubmissionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submitApplication = async (data: ApplicationData) => {
    setIsLoading(true);
    const jwtToken = getFromLocalStorage('jwtToken');
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/miner/miner-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          hotkey: data.hotkey,
          organisationName: data.organisationName,
          email: data.email
        })
      });
  
      const responseData = await response.json();
      if (!response.ok) {
        setResponse({ success: false, message: responseData.error || 'Failed to submit application'});
        setError(responseData.message);
        throw new Error(responseData.error || 'Failed to submit application');
      }
  
      setResponse({ success: true, message: 'Email sent with API and subscription keys.' });
    } catch (error: any) {
      console.error("error.....", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { submitApplication, response, isLoading };
};