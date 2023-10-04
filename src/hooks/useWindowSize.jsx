import React, { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 800) setIsMobile(false);
    else setIsMobile(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) setIsMobile(false);
      else setIsMobile(true);
    });
  }, []);
  return {
    isMobile,
  };
};
