import { SiwsMessage } from '@talismn/siws';

export const fetchNonceSubstrate = async (address: string) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/substrate/${address}`;
  const method = 'GET';
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error('Network response was not ok. Status:', response.status);
      console.error('Response:', response);
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Extracting 'nonce' from the response body if available
    const _nonce = data.body && data.body.nonce ? data.body.nonce : undefined;
    console.log(`Nonce fetched successfully for Substrate: ${_nonce}`);
    return _nonce;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', url, error);
    throw error;
  }
};

export const createSiwsMessage = (address: string, nonce: string, statement: string) => {
  if (typeof window !== 'undefined') {
    const message = new SiwsMessage({
      domain: window.location.host,
      address,
      statement,
      uri: window.location.origin,
      version: '1',
      nonce: nonce,
      issuedAt: Math.floor(Date.now() / 1000),
    });
    const preparedMessage = message.prepareMessage();
    console.log('preparedMessage SIWS:', preparedMessage);
    return preparedMessage;
  }
  return '';
};

// Bittensor specific utilities
export const getBittensorChainId = () => {
  // Bittensor mainnet chain ID
  return 'bittensor';
};

export const isBittensorAddress = (address: string): boolean => {
  // Bittensor addresses start with '5' and are 48 characters long (SS58 format)
  return address.length === 48 && address.startsWith('5');
};

export const formatBittensorAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
