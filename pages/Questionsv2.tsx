import Footer from '@/components/Common/Footer';
import { ErrorModal } from '@/components/QuestionPageComponents';
import MultiOutputVisualizer from '@/components/QuestionPageComponents/MultiOutputTask/MultiOutputVisualizer';
import SingleOutputTaskVisualizer from '@/components/QuestionPageComponents/SingleOutputTask/SingleOutputTaskVisualizer';
import useRequestTaskByTaskID from '@/hooks/useRequestTaskByTaskID';
import { useSIWE } from '@/hooks/useSIWE';
import Layout from '@/layout';
import { useAuth } from '@/providers/authContext';
import { useSubmit } from '@/providers/submitContext';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';
const Questionsv2 = () => {
  const router = useRouter();
  const { isAuthenticated, isSignedIn } = useAuth();
  const { signInWithEthereum } = useSIWE(() => console.log('post signin'));
  const { isConnected, address } = useAccount();
  const {
    getCriterionForResponse: criterionForResponse,
    addCriterionForResponse,
    resetCriterionForResponse,
  } = useSubmit();
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
  useEffect(() => {
    task && resetCriterionForResponse(task); //Putting the reset in this common parent page
  }, [task]);
  useEffect(() => {
    if (!isAuthenticated && isConnected && isSignedIn) {
      signInWithEthereum(address ?? '');
    }
  }, [isAuthenticated, isConnected, isSignedIn]);
  return (
    <Layout isFullWidth={true}>
      <ErrorModal
        open={!!taskError}
        onClose={() => {
          router.push('/task-list');
        }}
        errorMessage={"There's an error with this task."}
      />
      <div className="flex grow justify-center py-8">
        {task && task.taskData.responses.length == 1 && !isTaskLoading && (
          <div className="flex w-full justify-center px-4">
            <div className="w-full max-w-[1075px]">
              <SingleOutputTaskVisualizer containerClassName="" task={task} />
            </div>
          </div>
        )}
        {task && task.taskData.responses.length > 1 && !isTaskLoading && (
          <MultiOutputVisualizer containerClassName="" task={task} />
        )}
      </div>
      {!isTaskLoading && task && isAuthenticated && isConnected && <Footer task={task} />}
    </Layout>
  );
};

export default Questionsv2;
