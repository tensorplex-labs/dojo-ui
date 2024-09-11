import SingleOutputTaskVisualizer from '@/components/QuestionPageComponents/SingleOutputTask/SingleOutputTaskVisualizer';
import useRequestTaskByTaskID from '@/hooks/useRequestTaskByTaskID';
import Layout from '@/layout';
import { useAuth } from '@/providers/authContext';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useAccount } from 'wagmi';
const Questionsv2 = () => {
  const router = useRouter();
  const { isAuthenticated, isSignedIn } = useAuth();
  const { isConnected, address } = useAccount();
  const getTaskIdFromRouter = useCallback(() => {
    if (!router) return '';
    if (typeof router.query.taskId === 'string') return router.query.taskId;
    return '';
  }, [router]);
  const {
    task,
    loading: isTaskLoading,
    error: taskError,
  } = useRequestTaskByTaskID(getTaskIdFromRouter(), isConnected, isAuthenticated);
  return (
    <Layout isFullWidth={true}>
      <div className="flex grow justify-center px-4 py-8">
        <div className="flex w-full max-w-[1075px]">{task && <SingleOutputTaskVisualizer task={task} />}</div>
      </div>
    </Layout>
  );
};

export default Questionsv2;
