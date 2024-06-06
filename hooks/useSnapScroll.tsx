import { useEffect } from 'react';

const useSnapScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Timeout to debounce the scroll event
      let timeoutId = null;
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const snapHeight = viewportHeight * 0.4; // 40vh
        const snapIndex = Math.round(scrollY / snapHeight);
        const newScrollPosition = snapHeight * snapIndex;
        window.scrollTo({
          top: newScrollPosition,
          behavior: 'smooth',
        });
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useSnapScroll;
