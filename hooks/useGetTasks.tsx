import { useSubmit } from '@/providers/submitContext';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

export const taskStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED',
} as const;

export type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus];

export interface Task {
  taskId: string;
  title: string;
  body: string;
  expireAt: string;
  type: string;
  taskData: any[];
  status: TaskStatus;
  numResults: number;
  maxResults: number;
  numCriteria: number;
  isCompletedByWorker: boolean;
}

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

  const fetchTasks = useCallback(async () => {
    if (isFetchingRef.current) {
      console.log('Fetch request already in progress, skipping new request');
      return;
    }

    if (!jwtToken) {
      setTasks([]);
      setPagination(null);
      setError('No JWT token found');
      setLoading(false);
      return;
    }

    isFetchingRef.current = true;
    try {
      console.log('fetchTasks called', page, limit, taskQuery, sort, yieldMin, yieldMax);

      const yieldMinQuery = yieldMin ? `&yieldMin=${yieldMin}` : '';
      const yieldMaxQuery = yieldMax ? `&yieldMax=${yieldMax}` : '';
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/?page=${page}&limit=${limit}&task=${taskQuery}&sort=${sort}${yieldMinQuery}${yieldMaxQuery}`;

      setLoading(true);

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
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
  }, [page, limit, taskQuery, sort, yieldMin, yieldMax, jwtToken]);

  useEffect(() => {
    console.log('useEffect inside useGetTasks', router);
    if (!router.isReady) return;
    if (jwtToken) {
      fetchTasks();
    } else {
      setTasks([]);
      setPagination(null);
      setError('No JWT token found');
      setLoading(false);
    }
  }, [fetchTasks, jwtToken, router.isReady]);

  return { tasks, pagination, loading, error, refetchTasks: fetchTasks };
};

export default useGetTasks;
