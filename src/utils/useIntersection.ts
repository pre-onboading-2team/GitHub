import { useCallback, useEffect, useState } from "react";

export const useIntersection = (
  onIntersect: () => void,
  options?: IntersectionObserverInit
) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(target);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, target, options]);

  return [setTarget];
};
