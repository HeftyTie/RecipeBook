import { useRef } from 'react';

const scrollRefs = new Map();

export const useScroll = (id) => {
  const scrollRef = useRef(null);

  if (!scrollRefs.has(id)) {
    scrollRefs.set(id, scrollRef);
  }

  const scrollLeft = () => {
    if (scrollRefs.get(id).current) {
      scrollRefs.get(id).current.scrollTo({
        left: scrollRefs.get(id).current.scrollLeft - 500,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRefs.get(id).current) {
      scrollRefs.get(id).current.scrollTo({
        left: scrollRefs.get(id).current.scrollLeft + 500,
        behavior: 'smooth'
      });
    }
  };

  return {
    scrollRef: scrollRefs.get(id),
    scrollLeft,
    scrollRight,
  };
};
