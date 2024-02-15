"use client";
import { FC, Key } from "react";
import Typography from "@/components/ui/typography/Typography";
import { TechCard } from "@/components/ui/tech-card/TechCard";
import { Wrapper } from "@/components/wrapper";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { ListFilter } from "lucide-react";

interface ITechnologiesSkeletonProps
  extends React.HTMLAttributes<HTMLElement> {}

export const TechnologiesSkeleton: FC<ITechnologiesSkeletonProps> = () => {
  return (
    <Wrapper className={"w-full"}>
      <div className={"flex items-center mb-6"}>
        <ListFilter className={"ml-2 h-5 w-5 mr-4"} />
        {Array.from({ length: 2 }).map((_, i) => (
          <>
            <p className={""}>
              <Skeleton className={"w-[120px]"} />
            </p>
            <span className={"last:hidden mx-4"}>/</span>
          </>
        ))}
      </div>
      <section className={"grid grid-cols-3 grid-flow-row gap-6"}>
        {Array.from({ length: 12 })?.map((_, i) => (
          <TechCard className={"flex-1"} key={i} />
        ))}
      </section>
    </Wrapper>
  );
};
