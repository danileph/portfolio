import { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { Breakpoint } from "@/types/Breakpoint";
import { EXTRA_LARGE, LARGE, MEDIUM, SMALL } from "@/lib/consts/breakpoints";

const useViewport = () => {
  // const [breakpoint, setBreakpoint] = useState<Breakpoint>('medium');
  const { width, height } = useWindowDimensions();
  let breakpoint: Breakpoint = "extra-large";

  if (width >= EXTRA_LARGE) {
    breakpoint = "extra-large";
  } else if (width >= LARGE) {
    breakpoint = "large";
  } else if (width >= MEDIUM) {
    breakpoint = "medium";
  } else if (width >= SMALL) {
    breakpoint = "small";
  } else {
    breakpoint = "small";
  }

  return breakpoint;
};

export default useViewport;
