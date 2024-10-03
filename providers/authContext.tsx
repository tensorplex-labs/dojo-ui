// context/AuthContext.js
import { useModal } from '@/hooks/useModal';
import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';
import { MODAL } from '@/types/ProvidersTypes';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { tokenType } from '@/utils/states';
// import { AuthContextType } from '@/types/ProvidersTypes';
import { decode } from 'jsonwebtoken';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

interface AuthContextType {
  isAuthenticated: boolean;
  workerLogin: (loginPayload: any) => Promise<void>; // Adjust the type of `loginPayload` as needed
  workerLogout: () => void;
  loading: boolean;
  error: string | null;
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
  frontendJWTIsValid: (address: string, jwt?: string) => boolean;
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
  frontendJWTIsValid: () => false,
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { workerLoginAuth, loading, error } = useWorkerLoginAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { openModal: openInfoModal } = useModal(MODAL.informational);
  const { openModal } = useModal(MODAL.wallet);
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  // Attempt to retrieve the auth token from localStorage on initial load

  const frontendJWTIsValid = useCallback(
    (address: string, jwt?: string) => {
      const storedToken = jwt ?? getFromLocalStorage(tokenType);
      if (!storedToken) {
        return false;
      }
      const payload = decode(storedToken);
      if (payload && typeof payload === 'object' && payload.exp) {
        if (payload.sub === address && Date.now() < payload.exp * 1000) {
          return true;
        }
      }
      return false;
    },
    [tokenType]
  );

  const workerLogin = async (loginPayload: LoginAuthPayload) => {
    try {
      const token = await workerLoginAuth(loginPayload);
      if (!token) {
        localLogout();
      } else {
        localLogin(token);
      } // means the login failed, so disconnect the user
    } catch (err) {
      console.error('Error while worker login', err);
      disconnect();
    }
  };

  const localLogin = useCallback(
    (jwt: string) => {
      setIsAuthenticated(true);
      localStorage.setItem(tokenType, jwt);
    },
    [tokenType]
  );

  const localLogout = useCallback(() => {
    localStorage.removeItem(tokenType); // Remove the token from localStorage
    setIsAuthenticated(false);
    disconnect();
  }, [tokenType, disconnect]);

  //First render will always check presence of token and whether its valid or not.
  useEffect(() => {
    const token = getFromLocalStorage(tokenType);
    // disconnect();
    if (token && address) {
      const authState = frontendJWTIsValid(address, token);
      authState ? localLogin(token) : localLogout();
    }
  }, [address, localLogin, localLogout, frontendJWTIsValid, openInfoModal, openModal, isAuthenticated]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'wagmi.io.metamask.disconnected') {
        window.location.reload();
      }
      if (event.key === tokenType) {
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [disconnect, tokenType]);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        workerLogin,
        workerLogout: localLogout,
        loading,
        error,
        isSignedIn,
        setIsSignedIn,
        frontendJWTIsValid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
