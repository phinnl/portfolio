"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function useInViewport<T extends HTMLElement = any>() {
  const ref = useRef<T>(null);
  const [inViewport, setInViewport] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver === "undefined") {
      return null;
    }
    return new IntersectionObserver(([entry]) =>
      setInViewport(entry.isIntersecting),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef && observer) {
      observer.observe(currentRef);
      return () => observer.unobserve(currentRef);
    }
    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observer]);

  return { ref, inViewport };
}


