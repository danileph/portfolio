import { FC } from "react";
import { ListFilter } from "lucide-react";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { TechCard } from "@/components/ui/tech-card/TechCard";
import { Wrapper } from "@/components/wrapper";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

interface IProjectsSkeletonProps extends React.HTMLAttributes<HTMLElement> {}

export const ProjectsSkeleton: FC<IProjectsSkeletonProps> = () => {
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
      <section className={"grid grid-cols-3 items-start grid-flow-row gap-6 "}>
        {Array.from({ length: 6 })?.map((_, i) => (
          <ProjectCard
            className={cn((i + 1) % 4 === 0 && "row-span-2 col-span-2")}
            key={i}
          />
        ))}
      </section>
    </Wrapper>
  );
};
