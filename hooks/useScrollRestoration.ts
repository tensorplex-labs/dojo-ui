import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

const useScrollRestoration = () => {
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const saveScrollPosition = useCallback(() => {
    sessionStorage.setItem(`scrollPosition_${router.asPath}`, JSON.stringify({ x: window.scrollX, y: window.scrollY }));
  }, [router.asPath]);

  const restoreScrollPosition = useCallback(() => {
    const scrollData = sessionStorage.getItem(`scrollPosition_${router.asPath}`);
    if (scrollData) {
      const { x, y } = JSON.parse(scrollData);
      window.scrollTo(x, y);
    }
  }, [router.asPath]);

  return { saveScrollPosition, restoreScrollPosition };
};

export default useScrollRestoration;
