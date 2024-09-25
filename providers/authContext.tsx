// context/AuthContext.js
import { useJwtToken } from '@/hooks/useJwtToken';
import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';
// import { AuthContextType } from '@/types/ProvidersTypes';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDisconnect } from 'wagmi';

interface AuthContextType {
  isAuthenticated: boolean;
  workerLogin: (loginPayload: any) => Promise<void>; // Adjust the type of `loginPayload` as needed
  workerLogout: () => void;
  loading: boolean;
  error: string | null;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

// Set the default values and types for the context
const defaultContextValue: AuthContextType = {
  isAuthenticated: false,
  workerLogin: async () => {}, // Implement or mock as necessary
  workerLogout: () => {},
  loading: false,
  error: null,
  isSignedIn: false,
  setIsSignedIn: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { workerLoginAuth, loading, error } = useWorkerLoginAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { disconnect } = useDisconnect();
  const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
  // Attempt to retrieve the auth token from localStorage on initial load
  const token = useJwtToken();
  useEffect(() => {
    setIsAuthenticated(!!token); // Convert the presence of token to a boolean to set authenticated state
  }, [token]);

  const workerLogin = async (loginPayload: LoginAuthPayload) => {
    try {
      await workerLoginAuth(loginPayload);

      const token = localStorage.getItem(tokenType);
      if (!token) disconnect(); // means the login failed, so disconnect the user
      setIsAuthenticated(!!token);
    } catch (err) {
      console.error('Error while worker login', err);
      disconnect();
    }
  };

  const workerLogout = () => {
    localStorage.removeItem(tokenType); // Remove the token from localStorage
    setIsAuthenticated(false);
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
