import { useEffect, useState } from 'react';

export const useJwtToken = () => {
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
  useEffect(() => {
    const jwtToken = localStorage.getItem(tokenType);
    if (jwtToken) {
      setJwtToken(jwtToken);
    }
  }, []);

  return jwtToken;
};
