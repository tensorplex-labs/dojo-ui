// context/AuthContext.js
import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDisconnect } from 'wagmi';

interface AuthContextType {
    isAuthenticated: boolean;
    workerLogin: (loginPayload: any) => Promise<void>; // Adjust the type of `loginPayload` as needed
    workerLogout: () => void;
    loading: boolean;
    error: string | null;
}
  
  // Set the default values and types for the context
const defaultContextValue: AuthContextType = {
    isAuthenticated: false,
    workerLogin: async () => {}, // Implement or mock as necessary
    workerLogout: () => {},
    loading: false,
    error: null,
};

const AuthContext = createContext<AuthContextType>(defaultContextValue);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const { workerLoginAuth, loading, error } = useWorkerLoginAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {disconnect} = useDisconnect();

    // Attempt to retrieve the auth token from localStorage on initial load
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        setIsAuthenticated(!!token);  // Convert the presence of token to a boolean to set authenticated state
    }, []);

    const workerLogin = async (loginPayload: LoginAuthPayload) => {
        try {
            await workerLoginAuth(loginPayload);

            const token = localStorage.getItem('jwtToken');
            if (!token) disconnect() // means the login failed, so disconnect the user

            setIsAuthenticated(!!token);
        } catch(err) {
            console.error("Error while worker login", err);
            disconnect(); // Disconnect the user if an error occurs
        }
    };

    const workerLogout = () => {
        localStorage.removeItem('jwtToken');  // Remove the token from localStorage
        setIsAuthenticated(false);
        disconnect();
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            workerLogin,
            workerLogout,
            loading,
            error
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
