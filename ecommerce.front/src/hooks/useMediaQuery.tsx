"use client";

import { useEffect, useState } from "react";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = (e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width]);

  return targetReached;
};

export default useMediaQuery;
