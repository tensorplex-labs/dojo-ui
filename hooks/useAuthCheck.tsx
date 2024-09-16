import { useAuth } from '@/providers/authContext';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useJwtToken } from './useJwtToken';

export const useAuthCheck = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { isAuthenticated, workerLogout } = useAuth();
  const jwtToken = useJwtToken();
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = () => {
      const storedAddress = getFromLocalStorage('lastAuthenticatedAddress');
      const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
      const storedToken = getFromLocalStorage(tokenType);

      if (isAuthenticated && address !== storedAddress) {
        // console.log('Wallet address changed. Logging out...');
        disconnect();
        workerLogout();
        router.reload();
        return;
      }

      if (storedToken) {
        try {
          const payload = JSON.parse(atob(storedToken.split('.')[1]));
          const expirationTime = payload.exp * 1000;
          if (Date.now() >= expirationTime) {
            // console.log('JWT token expired. Logging out...');
            disconnect();
            workerLogout();
            router.reload();
          }
        } catch (error) {
          console.error('Error parsing JWT token:', error);
        }
      }
    };

    checkAuthStatus();

    const intervalId = setInterval(checkAuthStatus, 60000);

    return () => clearInterval(intervalId);
  }, [address, isAuthenticated, disconnect, workerLogout, jwtToken, router]);
};
