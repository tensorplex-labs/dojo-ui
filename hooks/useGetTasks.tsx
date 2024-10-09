import { useAuth } from '@/providers/authContext';
import { TaskPageContext } from '@/providers/taskPageContext';
import { Task } from '@/types/QuestionPageTypes';
import { getFromLocalStorage, wait } from '@/utils/general_helpers';
import { tasklistFull } from '@/utils/states';
import { useQuery } from '@tanstack/react-query';
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
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const isFetchingRef = useRef<boolean>(false);
  const { address } = useAccount();
  const { partnerCount } = useContext(TaskPageContext);
  const { exp } = useFeature({ kw: 'demo' });
  const { workerLogout } = useAuth();

  const {
    data,
    isLoading,
    error: queryError,
    refetch,
  } = useQuery({
    queryKey: [
      'refetchTaskList',
      exp,
      partnerCount,
      isConnected,
      isAuthenticated,
      taskQuery,
      yieldMin,
      yieldMax,
      page,
      limit,
      sort,
      order,
    ],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      try {
        if (!router.isReady) return null;

        // setTasks([]);
        await wait(500);
        console.log('queued task empty!');
        if (exp) {
          return await fetchDemoTasks();
        } else {
          console.log('user went in: connected,authenticated', isConnected, isAuthenticated);
          if (!isAuthenticated || !isConnected) {
            return null;
          }
          return await fetchTasks();
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    },
  });
  const fetchDemoTasks = useCallback(async () => {
    await wait(100);
    setPagination({
      pageNumber: 1,
      pageSize: 50,
      totalPages: Math.ceil(tasklistFull.length / 50),
      totalItems: tasklistFull.length,
    });
    if (taskQuery.toLowerCase() === 'all') {
      console.log('but went into exp!', tasklistFull);
      return tasklistFull;
    } else {
      const filteredTaskList: Task[] = [];
      taskQuery.split(',').forEach((task) => {
        tasklistFull.filter((t) => {
          if (t.type.toLowerCase() === task.toLowerCase()) {
            filteredTaskList.push(t);
          }
        });
      });
      console.log('but went into exp!', filteredTaskList);
      return filteredTaskList;
    }
  }, [taskQuery]);

  const fetchTasks = useCallback(async () => {
    try {
      const yieldMinQuery = yieldMin ? `&yieldMin=${yieldMin}` : '';
      const yieldMaxQuery = yieldMax ? `&yieldMax=${yieldMax}` : '';
      const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/?page=${page}&limit=${limit}&task=${taskQuery}&sort=${sort}${yieldMinQuery}${yieldMaxQuery}&order=${order}`;

      const jwtToken = getFromLocalStorage(`dojoui__jwtToken`);

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
        console.log('but went into non exp!', data.body);
        return data.body;
        // setTasks(data.body.tasks);
        // setPagination(data.body.pagination);
      } else {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
    } catch (e: any) {
      throw new Error(e);
    }
  }, [page, limit, taskQuery, sort, order, yieldMin, yieldMax, workerLogout]);

  useEffect(() => {
    if (exp) {
      console.log(
        'useeffect1 is exp',
        isAuthenticated,
        isConnected,
        address,
        exp,
        refetch,
        router.isReady,
        partnerCount
      );
    } else if (!isAuthenticated || !isConnected) {
      setTasks([]);
      setPagination(null);
      setError('No JWT token found');
      return;
    } else {
      console.log(
        'useeffect1 is not exp',
        isAuthenticated,
        isConnected,
        address,
        refetch,
        router.isReady,
        partnerCount
      );
      // refetch();
    }
  }, [isAuthenticated, isConnected, address, exp, refetch, router.isReady, partnerCount]);
  useEffect(() => {
    console.log('useeffect2', data, isLoading, queryError);
    if (isLoading || queryError || !data) {
      return;
    }
    if ('tasks' in data) {
      setTasks(data.tasks);
      setPagination(data.pagination);
    } else {
      setPagination({
        pageNumber: 1,
        pageSize: 50,
        totalPages: Math.ceil(tasklistFull.length / 50),
        totalItems: tasklistFull.length,
      });
      setTasks(data);
    }
  }, [data, isLoading, queryError]);

  return { tasks, pagination, loading: isLoading, queryError: queryError || error, refetchTasks: refetch };
};

export default useGetTasks;
