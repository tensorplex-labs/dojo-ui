// context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import useWorkerLoginAuth, { LoginAuthPayload } from '@/hooks/useWorkerLoginAuth';

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

    // Attempt to retrieve the auth token from localStorage on initial load
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        setIsAuthenticated(!!token);  // Convert the presence of token to a boolean to set authenticated state
    }, []);

    const workerLogin = async (loginPayload: LoginAuthPayload) => {
        await workerLoginAuth(loginPayload);
        const token = localStorage.getItem('jwtToken');
        setIsAuthenticated(!!token);
    };

    const workerLogout = () => {
        localStorage.removeItem('jwtToken');  // Remove the token from localStorage
        setIsAuthenticated(false);
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
