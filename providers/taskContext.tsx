'use client';
import { Pagination, Task, TasksResponse, taskStatus } from '@/hooks/useGetTasks';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { useRouter } from 'next/router';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface TaskContextType {
  taskData: Task[];
  setTaskData: Function;
  setPagination: Function;
  getNextTaskId: Function;
}

const defaultContextValue: TaskContextType = {
  taskData: [],
  setTaskData: () => {},
  setPagination: () => {},
  getNextTaskId: () => {},
};

const TaskContext = createContext<TaskContextType>(defaultContextValue);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [taskData, setTaskData] = useState<Task[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [cache, setCache] = useState<Map<number, TasksResponse>>(new Map());
  const router = useRouter();
  const jwtToken = getFromLocalStorage('jwtToken');

  const fetchTasks = useCallback(
    async (page: number): Promise<TasksResponse | null> => {
      console.log('Fetching tasks for page:', page, 'cache', cache);
      if (cache.has(page)) {
        const cachedData = cache.get(page) as TasksResponse;
        setTaskData(cachedData.body.tasks);
        setPagination(cachedData.body.pagination);
        return cachedData;
      }

      try {
        const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/?page=${page}&limit=10&task=All&sort=createdAt`;
        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        const data: TasksResponse = await response.json();

        if (response.ok) {
          // Cache the fetched tasks and update state
          setCache(prevCache => new Map(prevCache).set(page, data));
          return data;
        } else {
          throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }
      } catch (e: any) {
        console.error(e.message);
        return null;
      }
    },
    [jwtToken, cache]
  );

  const findNextUncompletedTask = (tasks: Task[], startIdx: number = 0): string | null => {
    for (let i = startIdx; i < tasks.length; i++) {
      if (!tasks[i].isCompletedByWorker && !(tasks[i].status === taskStatus.EXPIRED)) {
        return tasks[i].taskId;
      }
    }
    return null;
  };

  const getNextTaskId = useCallback(async (): Promise<string | null> => {
    let currentTaskIndex = taskData.findIndex(task => task.taskId === router.query.taskId);
    let nextTaskId = findNextUncompletedTask(taskData, currentTaskIndex + 1);

    if (nextTaskId) return nextTaskId;

    let newPagination = pagination;

    // If no uncompleted task is found in the current page, fetch new pages
    let nextPage = (pagination?.pageNumber ?? 1) + 1;

    while (!nextTaskId && newPagination && nextPage <= newPagination.totalPages) {
      const fetchedData = await fetchTasks(nextPage);

      if (fetchedData && fetchedData.body) {
        nextTaskId = findNextUncompletedTask(fetchedData.body.tasks);
        if (nextTaskId) {
          setTaskData(fetchedData.body.tasks);
          setPagination(fetchedData.body.pagination);
          return nextTaskId;
        }
        nextPage++;
      } else {
        break;
      }
    }

    // If no uncompleted task is found after the last page, wrap around to the first page
    if (!nextTaskId && newPagination) {
      nextPage = 1;
      while (!nextTaskId && nextPage < newPagination.pageNumber) {
        const fetchedData = await fetchTasks(nextPage);

        if (fetchedData && fetchedData.body) {
          nextTaskId = findNextUncompletedTask(fetchedData.body.tasks);
          if (nextTaskId) {
            setTaskData(fetchedData.body.tasks);
            setPagination(fetchedData.body.pagination);
            return nextTaskId;
          }
          nextPage++;
        } else {
          break;
        }
      }
    }

    // If no uncompleted task is found, update state with the last fetched data
    setTaskData(taskData);
    setPagination(newPagination);

    return null;
  }, [taskData, router.query.taskId, pagination, fetchTasks]);

  return (
    <TaskContext.Provider value={{ taskData, setTaskData, getNextTaskId, setPagination }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskData = () => useContext(TaskContext);
