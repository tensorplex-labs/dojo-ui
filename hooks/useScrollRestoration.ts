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
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    sessionStorage.setItem(`scrollPosition_${router.asPath}`, JSON.stringify(scrollPercentage));
  }, [router.asPath]);

  const restoreScrollPosition = useCallback(() => {
    const scrollData = sessionStorage.getItem(`scrollPosition_${router.asPath}`);
    if (scrollData) {
      const scrollPercentage = JSON.parse(scrollData);
      const scrollY = scrollPercentage * document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, scrollY);
    }
  }, [router.asPath]);

  return { saveScrollPosition, restoreScrollPosition };
};

export default useScrollRestoration;
