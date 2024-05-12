"use client"
import { Task } from '@/hooks/useGetTasks';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router';

interface TaskContextType {
  taskData: Task[];
  setTaskData: Function;
  getNextTaskId: Function
}

const defaultContextValue: TaskContextType = {  
  taskData: [],
  setTaskData: () => {},
  getNextTaskId: () => {}
};

const TaskContext = createContext<TaskContextType>(defaultContextValue);

export const TaskProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [taskData, setTaskData] = useState<Task[]>([]);
  const router = useRouter();

  const getNextTaskId = useCallback(() => {
    const currentTaskIndex = taskData.findIndex(task => task.taskId === router.query.taskId);
    const totalTasks = taskData.length;

    // Start searching from the task immediately after the current task
    for (let i = 1; i <= totalTasks; i++) {
        const index = (currentTaskIndex + i) % totalTasks; //ensure reaching the end of the list, the index wraps around to the beginning.
        const task = taskData[index];

        // Check if the task is not completed
        if (!task.isCompletedByWorker) {
            return task.taskId;
        }
    }

    return null; // Return null if no uncompleted tasks are found after a full loop
}, [taskData, router.query.taskId]);


  return (
    <TaskContext.Provider value={{ taskData, setTaskData, getNextTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskData = () => useContext(TaskContext);
