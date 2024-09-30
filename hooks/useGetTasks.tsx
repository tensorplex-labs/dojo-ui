import { useAuth } from '@/providers/authContext';
import { useSubmit } from '@/providers/submitContext';
import { TaskPageContext } from '@/providers/taskPageContext';
import { Task } from '@/types/QuestionPageTypes';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { tasklistFull } from '@/utils/states';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useAccount } from 'wagmi';
import useFeature from './useFeature';

export const taskStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED',
} as const;

export type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus];

export interface Pagination {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
}

export interface TasksResponse {
  success: boolean;
  body: {
    tasks: Task[];
    pagination: Pagination;
  };
  error: string | null;
}

const useGetTasks = (
  page: number,
  limit: number,
  taskQuery: string,
  sort: string,
  order: string,
  isAuthenticated: boolean,
  isConnected: boolean,
  yieldMin?: number,
  yieldMax?: number
) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const jwtToken = getFromLocalStorage(`${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`);
  const { triggerTaskPageReload } = useSubmit();
  const router = useRouter();
  const isFetchingRef = useRef<boolean>(false);
  const { address } = useAccount();
  const { partnerCount } = useContext(TaskPageContext);
  const { exp } = useFeature({ kw: 'demo' });
  const { frontendJWTIsValid, workerLogout } = useAuth();

  const fetchDemoTasks = useCallback(async () => {
    setTasks([]);
    if (taskQuery.toLowerCase() === 'all') {
      setTasks(tasklistFull);
    } else {
      const filteredTaskList: Task[] = [];
      taskQuery.split(',').forEach((task) => {
        tasklistFull.filter((t) => {
          if (t.type.toLowerCase() === task.toLowerCase()) {
            filteredTaskList.push(t);
          }
        });
      });
      setTasks(filteredTaskList);
    }
    setPagination({
      pageNumber: 1,
      pageSize: 20,
      totalPages: Math.ceil(tasklistFull.length / 20),
      totalItems: tasklistFull.length,
    });
  }, [setTasks, taskQuery]);

  const fetchTasks = useCallback(async () => {
    if (isFetchingRef.current) {
      console.log('Fetch request already in progress, skipping new request');
      return;
    }
    setTasks([]);

    if (!jwtToken || !isAuthenticated || !isConnected) {
      localStorage.removeItem(`${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`);
      setTasks([]);
      setPagination(null);
      setError('No JWT token found');
      setLoading(false);
      return;
    }

    isFetchingRef.current = true;
    try {
      const yieldMinQuery = yieldMin ? `&yieldMin=${yieldMin}` : '';
      const yieldMaxQuery = yieldMax ? `&yieldMax=${yieldMax}` : '';
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/?page=${page}&limit=${limit}&task=${taskQuery}&sort=${sort}${yieldMinQuery}${yieldMaxQuery}&order=${order}`;

      setLoading(true);

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
      if (response.status === 401) {
        workerLogout();
      }
      const data: TasksResponse = await response.json();

      if (response.ok) {
        setTasks(data.body.tasks);
        setPagination(data.body.pagination);
      } else {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  }, [page, limit, taskQuery, sort, order, yieldMin, yieldMax, jwtToken, isAuthenticated, isConnected]);

  useEffect(() => {
    if (!router.isReady) return;
    if (exp) {
      fetchDemoTasks();
      setLoading(false);
      return;
    }
    fetchTasks();
  }, [exp, fetchTasks, jwtToken, router.isReady, partnerCount]);

  return { tasks, pagination, loading, error, refetchTasks: exp ? fetchDemoTasks : fetchTasks };
};

export default useGetTasks;
