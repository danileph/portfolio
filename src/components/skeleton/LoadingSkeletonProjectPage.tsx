"use client";
import React, { FC } from "react";
import { Wrapper } from "@/components/wrapper";
import { Author } from "@/app/projects/[projectId]/author";
import { Title } from "@/components/ui/title";
import Typography from "@/components/ui/typography/Typography";
import A from "@/components/ui/a/A";
import { ExternalLink, Github } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { ProjectCarousel } from "@/app/projects/[projectId]/project-carousel/ProjectCarousel";
import { Skeleton as SkeletonOrigin } from "@/components/skeleton/Skeleton";
import { cn } from "@/lib/utils";

interface ILoadingSkeletonProjectPageProps {}

const Skeleton: FC<React.ComponentProps<typeof SkeletonOrigin>> = ({
  className,
  ...props
}) => (
  <SkeletonOrigin
    className={cn("bg-my-natural-900 brightness-125", className)}
    {...props}
  />
);

const SkeletonBlue: FC<React.ComponentProps<typeof SkeletonOrigin>> = ({
  className,
  ...props
}) => (
  <SkeletonOrigin
    className={cn("bg-[#191E24] brightness-125", className)}
    {...props}
  />
);

const LoadingSkeletonProjectPage: FC<ILoadingSkeletonProjectPageProps> = () => {
  return (
    <main className={"relative z-10 pb-10 md:pb-20 pt-10 md:pt-28"}>
      <Wrapper className={"max-w-[1000px]"}>
        {/*<div className={"flex items-center space-x-8 mb-6 text-sm"}>*/}
        {/*  <p className={"inline-flex items-center"}>*/}
        {/*    <Skeleton className={"w-[110px]"} />*/}
        {/*  </p>*/}
        {/*  <p className={"inline-flex items-center text-sm"}>*/}
        {/*    <Skeleton className={"w-[110px]"} />*/}
        {/*  </p>*/}
        {/*</div>*/}
        <Title className={"mb-10"}>
          <SkeletonBlue className={"max-w-[550px]"} />
        </Title>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-[minmax(min-content,_100px)_auto] grid-flow-row gap-4 justify-items-start max-w-[600px] md:my-24 items-baseline"
          }
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <>
              <span
                className={
                  "col-span-1 font-roboto-mono uppercase text-xs hidden md:block"
                }
              >
                <SkeletonBlue className={"w-[100px]"} />
              </span>
              <Typography
                className={"col-span-1 m-0 font-medium -mb-2 md:mb-0"}
              >
                <SkeletonBlue className={"w-[150px]"} />
              </Typography>
            </>
          ))}

          <span
            className={
              "col-span-1 uppercase text-xs font-roboto-mono hidden md:block"
            }
          >
            <SkeletonBlue className={"w-[100px]"} />
          </span>
          <div className={"flex flex-wrap -mt-2 mb-6 col-span-1"}>
            {Array.from({ length: 6 })?.map((_, i) => (
              <SkeletonBlue
                key={i}
                className={"mt-2 mr-2 px-3 py-1 w-[80px]"}
              />
            ))}
          </div>
        </div>
      </Wrapper>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-2 my-10 md:my-24"
        }
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} image />
        ))}
      </div>
      <Wrapper className={"max-w-[1000px]"}>
        {Array.from({ length: 2 }).map(() => (
          <>
            <Title level={3}>
              <Skeleton className={"max-w-[250px]"} />
            </Title>
            {Array.from({ length: 5 }).map((_, i) => (
              <Typography key={i} className={"mb-2"}>
                <Skeleton />
              </Typography>
            ))}
          </>
        ))}
      </Wrapper>
    </main>
  );
};

export default LoadingSkeletonProjectPage;
