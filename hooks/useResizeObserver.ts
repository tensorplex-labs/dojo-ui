import React from 'react';

export const useResizeObserver = <T extends HTMLElement>(callback: (entry: ResizeObserverEntry) => void) => {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        callback(entries[0]);
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [callback]);

  return ref;
};
