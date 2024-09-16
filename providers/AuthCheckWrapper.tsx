import { useJwtToken } from '@/hooks/useJwtToken';
import { useAuth } from '@/providers/authContext';
import { getFromLocalStorage } from '@/utils/general_helpers';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

export function AuthCheckWrapper({ Component, pageProps }: AppProps) {
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
        disconnect();
        workerLogout();
        router.reload();
        return;
      }

      if (storedToken) {
        try {
          const payload = JSON.parse(atob(storedToken.split('.')[1]));
          const expirationTime = payload.exp * 1000;
          const currentTime = Date.now();

          if (currentTime >= expirationTime) {
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

  return <Component {...pageProps} />;
}
