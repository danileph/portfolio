import { useEffect, useState } from "react";

export const useTimeout = (callback: () => void, time: number) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const _timer = window.setTimeout(callback, time);
    setTimer(_timer);

    return () => clearTimeout(_timer);
  }, []);

  return timer;
};
