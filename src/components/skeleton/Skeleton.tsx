"use client";
import { cn } from "@/lib/utils";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface ISkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: boolean;
}

function Skeleton({ className, image, ...props }: ISkeletonProps) {
  const [height, setHeight] = useState(100);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (image && ref && ref.current) {
      const rootElem = ref.current;
      const initHeight = () => {
        console.log(rootElem.offsetWidth);
        setHeight((rootElem.offsetWidth * 2) / 3);
      };
      initHeight();

      window.addEventListener("resize", initHeight);

      return () => {
        window.removeEventListener("resize", initHeight);
      };
    }
  }, [ref.current]);

  return (
    <div
      ref={ref}
      className={cn(
        "animate-pulse rounded-md bg-[#383B40] inline-block w-full after:content-['.'] after:invisible leading-none",
        className
      )}
      style={{
        height: image ? height : "",
      }}
      {...props}
    />
  );
}

export { Skeleton };
