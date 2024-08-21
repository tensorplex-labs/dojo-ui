import React, { createContext, useState } from 'react';

interface TaskPageContextType {
  partnerCount: number;
  setPartnerCount: React.Dispatch<React.SetStateAction<number>>;
}

const defaultContextValue: TaskPageContextType = {
  partnerCount: 0,
  setPartnerCount: () => {},
};

export const TaskPageContext = createContext<TaskPageContextType>(defaultContextValue);

export const TaskPageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [partnerCount, setPartnerCount] = useState(0);

  return <TaskPageContext.Provider value={{ partnerCount, setPartnerCount }}>{children}</TaskPageContext.Provider>;
};
