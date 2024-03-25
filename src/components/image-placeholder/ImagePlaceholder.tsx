"use client";
import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { cn } from "@/lib/utils";

interface IImagePlaceholderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Skeleton>, "children"> {
  children: (obj: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isError: boolean;
    setIsError: React.Dispatch<React.SetStateAction<boolean>>;
    imgStyles: string;
    // imgRef: React.RefObject<HTMLImageElement>;
  }) => React.ReactElement<HTMLImageElement>;
}

export const ImagePlaceholder: FC<IImagePlaceholderProps> = ({
  children,
  className,
  image = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [imgStyles, setImgeStyles] = useState("hidden");
  // const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log({ isLoading, isError });
    if (isError || isLoading) setImgeStyles("hidden");
    else setImgeStyles("block");
  }, [isError, isLoading]);

  // useEffect(() => {
  //   if (imgRef?.current?.complete) {
  //     console.log("complete");
  //     setIsLoading(false);
  //     setIsError(false);
  //   }
  // }, [imgRef?.current?.complete]);

  // if (isLoading) {
  //   return <Skeleton image className={cn("w-full", className)} {...props} />;
  // } else if (isError) {
  //   return (
  //     <Image
  //       src={"/imgs/img-placeholder.svg"}
  //       alt={"placeholder"}
  //       height={1000}
  //       width={1000}
  //     >
  //       error
  //     </Image>
  //   );
  // } else {
  //   return children({
  //     isError,
  //     isLoading,
  //     setIsLoading,
  //     setIsError,
  //   });
  // }

  return (
    <>
      <Skeleton
        image={image}
        className={cn("w-full hidden", isLoading && "block", className)}
        {...props}
      />
      <Image
        src={"/imgs/img-placeholder.svg"}
        alt={"placeholder"}
        height={625.5}
        width={1110}
        className={cn("hidden", isError && "block")}
      />
      {children({
        isError,
        isLoading,
        setIsLoading,
        setIsError,
        imgStyles,
        // imgRef,
      })}
    </>
  );
};
