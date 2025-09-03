import { useAuth } from '@/providers/authContext';
import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { useState } from 'react';
import { LoginAuthPayload } from './useWorkerLoginAuth';

export interface SubstrateAuthResponse {
  success: boolean;
  data?: {
    token: string;
  };
  message?: string;
}

const useSubstrateAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { localLogin } = useAuth();
  const tokenType = `dojoui__jwtToken`;

  const fetchNonce = async (address: string) => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/nonce/${address}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response:', response);

    if (!response.ok) {
      throw new Error('Failed to fetch nonce');
    }

    const data = await response.json();
    console.log('Data:', data);
    return data.data?.nonce;
  };

  const signInWithSubstrate = async (account: InjectedAccountWithMeta) => {
    setLoading(true);
    setError(null);

    try {
      // 1. Fetch nonce from backend
      const nonce = await fetchNonce(account.address);
      if (!nonce) throw new Error('Failed to fetch nonce');

      console.log('Fetched nonce:', nonce);

      // 2. Create SIWS message (similar to SIWE)
      const { SiwsMessage } = await import('@talismn/siws');

      const siwsMessage = new SiwsMessage({
        domain: window.location.host,
        uri: window.location.origin,
        address: account.address,
        nonce: nonce,
        statement: 'Sign in to Dojo UI with your Substrate account',
      });

      console.log('Created SIWS message:', siwsMessage);

      // 3. Get injector and sign the message
      const { web3FromSource } = await import('@polkadot/extension-dapp');
      const injector = await web3FromSource(account.meta.source);

      console.log('Got injector, signing message...');
      const signedMessage = await siwsMessage.sign(injector);
      console.log('Signed message:', signedMessage);

      // 4. Prepare payload for backend
      const payload: LoginAuthPayload = {
        walletAddress: account.address,
        signature: signedMessage.signature,
        message: signedMessage.message,
        timestamp: Math.floor(Date.now() / 1000).toString(),
        nonce: nonce,
      };

      console.log('Sending payload to backend:', payload);

      // 5. Send to backend for verification
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data: SubstrateAuthResponse = await response.json();

      if (response.ok && data.success) {
        if (data.data?.token) {
          localStorage.setItem(tokenType, data.data.token);
          localLogin(data.data.token);
          return data.data.token;
        } else {
          throw new Error('Token is undefined');
        }
      } else {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    signInWithSubstrate,
    loading,
    error,
  };
};

export default useSubstrateAuth;
