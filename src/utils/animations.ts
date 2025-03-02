
import { useEffect, useState } from 'react';

// Hooks for animations
export const useInView = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

// Staggered animation for lists of items
export const staggeredAnimationClasses = (index: number, baseClass: string) => {
  const delays = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300', 'animation-delay-400', 'animation-delay-500'];
  const delayClass = delays[index % delays.length];
  return `${baseClass} ${delayClass}`;
};

// Delayed execution for sequential animations
export const withDelay = (callback: () => void, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve(true);
    }, ms);
  });
};
