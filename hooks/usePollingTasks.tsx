import { useCallback, useEffect, useState } from 'react';

const usePollingTasks = (refetchTasks: () => Promise<void>, initialCountdown: number = 20) => {
  const [countdown, setCountdown] = useState<number>(initialCountdown);

  const handlePollingTasks = useCallback(async () => {
    if (countdown === 0) {
      await refetchTasks();
      setCountdown(initialCountdown);
    } else {
      setCountdown((prev) => prev - 1);
    }
  }, [countdown, refetchTasks, initialCountdown]);

  useEffect(() => {
    const timer = setInterval(() => {
      handlePollingTasks();
    }, 1000);

    return () => clearInterval(timer);
  }, [handlePollingTasks]);

  return countdown;
};

export default usePollingTasks;
