import { Task } from '@/types/QuestionPageTypes';
import { getFromLocalStorage } from '@/utils/general_helpers';
import { useEffect, useState } from 'react';

const useRequestTaskByTaskID = (taskId: string, isConnected?: boolean, isAuthenticated?: boolean) => {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tokenType = `${process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT}__jwtToken`;
    const jwtToken = getFromLocalStorage(tokenType);
    const fetchTask = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const data = await response.json();
        setTask({
          taskId: 'ea18997e-3ef2-4486-b17b-e70709d25197',
          title: 'test',
          body: 'test',
          expireAt: '2024-12-03T15:04:00Z',
          type: '3D_MODEL',
          taskData: {
            task: '3D_MODEL',
            prompt: 'Generate an image of a green dog.',
            criteria: [
              {
                max: 100,
                min: 1,
                type: 'multi-score',
                options: ['stabilityai/stable-diffusion-xl-base-1.0', 'runwayml/stable-diffusion-v1-5'],
              },
            ],
            responses: [
              {
                model: 'stabilityai/stable-diffusion-xl-base-1.0',
                completion: { url: 'https://dojo-files-dev.tensorplex.dev/donald_duck.ply' },
              },
              {
                model: 'runwayml/stable-diffusion-v1-5',
                completion: {
                  url: 'https://dojo-files-dev.tensorplex.dev/miniature_godzilla_with_a_blue_skin_and_a_green_face.ply',
                },
              },
            ],
          },
          status: 'IN_PROGRESS',
          maxResults: 10,
          numResults: 0,
          numCriteria: 4,
        });
        // if (response.ok) {
        //   setTask(data.body);
        // } else {
        //   setError(data.error || `HTTP error! status: ${response.status}`);
        // }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    if (isConnected && isAuthenticated && taskId) {
      fetchTask();
    } else {
      setTask(null);
    }
  }, [taskId, isConnected, isAuthenticated]); // jwtToken is not a dependency anymore since it's fetched inside the effect

  return { task, loading, error };
};

export default useRequestTaskByTaskID;
