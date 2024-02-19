import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

type ScrollToFunction = (x: number, y: number) => void;

const useWindowScroll = (): [ScrollPosition, ScrollToFunction] => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: window.scrollX,
    y: window.scrollY,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo: ScrollToFunction = (x, y) => {
    window.scrollTo(x, y);
  };

  return [scrollPosition, scrollTo];
};

export default useWindowScroll;
