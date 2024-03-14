"use client";
import {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { ImagePlaceholder } from "@/components/image-placeholder/ImagePlaceholder";
import { inspect } from "util";

interface ITechCardSkeletonProps extends React.HTMLAttributes<HTMLElement> {}
const TechCardSkeleton: FC<ITechCardSkeletonProps> = () => {
  return <></>;
};

interface ITechCardProps extends React.HTMLAttributes<HTMLElement> {
  data?: {
    image: {
      src: string;
      alt: string;
    };
    grade: number;
    name: string;
  };
}

interface ITechCardCompound {
  Skeleton: typeof TechCardSkeleton;
}

const TechCard: ForwardRefExoticComponent<
  ITechCardProps & RefAttributes<HTMLDivElement>
> &
  ITechCardCompound = forwardRef<HTMLDivElement, ITechCardProps>(
  ({ className, data, ...props }, ref) => {
    const total = 10;
    const id = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const [currWidth, setCurrWidth] = useState(0);

    const calculateCurrWidth = (
      width: number,
      totalAmount: number,
      currAmount: number
    ) => (width / totalAmount) * currAmount;

    useEffect(() => {
      if (rootRef && rootRef.current) {
        setCurrWidth(
          Math.round(
            calculateCurrWidth(
              rootRef.current.offsetWidth,
              total,
              data?.grade ?? 0
            )
          )
        );
      }
    }, []);

    // const onMouseEnterHandler = () => {
    //   if (rootRef && rootRef.current) {
    //     setCurrWidth(
    //       calculateCurrWidth(rootRef.current.offsetWidth, total, grade)
    //     );
    //   }
    // };

    return (
      <div
        ref={(el) => {
          (rootRef as React.MutableRefObject<HTMLDivElement | null>).current =
            el;
          if (ref) {
            // If a ref is passed from parent, assign it to both rootRef and forwarded ref
            if (typeof ref === "function") {
              ref(el);
            } else if (ref.hasOwnProperty("current")) {
              // If ref is an object with a 'current' property (RefObject), assign the element to it
              ref.current = el;
            }
          }
        }}
        className={cn(
          "bg-my-natural-760 border-2 border-my-natural-720 h-[90px] relative group transition overflow-hidden font-medium rounded-my-rounded",
          className
        )}
        {...props}
      >
        {data && (
          <div
            className={`absolute z-20 w-full h-full text-center flex flex-col justify-center items-center hidden group-hover:flex transition`}
          >
            <div
              className={"absolute top-0 left-0 bg-my-natural-740/60 h-full"}
              style={{ width: currWidth }}
            />
            <p className={"text-my-natural-100 text-xl font-semibold z-10"}>
              {data?.grade} из {total}
            </p>
            <p className={"text-xs text-my-natural-500 z-10"}>
              Уровень владения
            </p>
          </div>
        )}
        <div
          className={cn(
            "flex items-center font-semibold h-full w-full p-4",
            data && "group-hover:brightness-30 group-hover:blur"
          )}
        >
          {data ? (
            <ImagePlaceholder
              image={false}
              className={"mr-4 w-[54px] h-[54px] rounded-full"}
            >
              {({ setIsError, setIsLoading, imgStyles }) => (
                <img
                  src={data.image.src}
                  alt={data.image.src}
                  width={40}
                  height={40}
                  className={cn("mr-4", imgStyles)}
                  onLoad={() => {
                    setIsLoading(false);
                    setIsError(false);
                  }}
                  onError={() => {
                    setIsLoading(false);
                    setIsError(true);
                  }}
                />
              )}
            </ImagePlaceholder>
          ) : (
            <Skeleton className={"mr-4 w-[54px] h-[54px] rounded-full"} />
          )}
          <p>{data ? data.name : <Skeleton className={"w-[140px]"} />}</p>
        </div>
      </div>
    );
  }
) as ForwardRefExoticComponent<ITechCardProps & RefAttributes<HTMLDivElement>> &
  ITechCardCompound;
TechCard.Skeleton = TechCardSkeleton;
TechCard.displayName = "TechCard";

export { TechCard };
