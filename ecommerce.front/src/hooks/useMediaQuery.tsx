"use client";

import { useEffect, useState } from "react";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      const updateTarget = (e: MediaQueryListEvent) => {
        setTargetReached(e.matches);
      };

      media.addEventListener("change", updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", updateTarget);
    }
  }, [width]);

  return targetReached;
};

export default useMediaQuery;
