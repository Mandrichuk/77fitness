import { useState, useEffect } from "react";

export function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth); // Set initial width
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  return width;
}
