import { useJwtToken } from '@/hooks/useJwtToken';
import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDisconnect } from 'wagmi';

interface AuthContextType {
  isAuthenticated: boolean;
  workerLogin: (loginPayload: LoginAuthPayload) => Promise<void>;
  workerLogout: () => void;
  loading: boolean;
  error: string | null;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

const defaultContextValue: AuthContextType = {
  isAuthenticated: false,
  workerLogin: async () => {},
  workerLogout: () => {},
  loading: false,
  error: null,
  isSignedIn: false,
  setIsSignedIn: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { workerLoginAuth, loading, error } = useWorkerLoginAuth();
  const [lastAuthenticatedAddress, setLastAuthenticatedAddress] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { disconnect } = useDisconnect();
  const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
  const token = useJwtToken();

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  const workerLogin = async (loginPayload: LoginAuthPayload) => {
    try {
      await workerLoginAuth(loginPayload);
      setIsAuthenticated(true);
      setLastAuthenticatedAddress(loginPayload.walletAddress);
      localStorage.setItem('lastAuthenticatedAddress', loginPayload.walletAddress);
    } catch (error) {
      console.error('Login error:', error);
      setIsAuthenticated(false);
    }
  };

  const workerLogout = () => {
    localStorage.removeItem(tokenType);
    localStorage.removeItem('lastAuthenticatedAddress');
    setIsAuthenticated(false);
    setLastAuthenticatedAddress(null);
    disconnect();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        workerLogin,
        workerLogout,
        loading,
        error,
        isSignedIn,
        setIsSignedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
