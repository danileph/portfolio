"use client";
import { FC, useMemo, useState } from "react";
import { Filter, IFilterItem } from "@/components/filter";
import { IProject } from "@/models/IProject";
import { TechCard } from "@/components/ui/tech-card/TechCard";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";
import useViewport from "@/hooks/useViewport";
import { SMALL } from "@/lib/consts/breakpoints";

interface IProjectsClientProps extends React.HTMLAttributes<HTMLElement> {
  filterItems?: IFilterItem[];
  projects?: IProject[];
}

export const ProjectsClient: FC<IProjectsClientProps> = ({
  filterItems,
  projects,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const filteredProjects = useMemo(() => {
    if (!selectedFilter) return;
    if (selectedFilter === "all") {
      return projects;
    } else {
      return projects?.filter((project) => project.type === selectedFilter);
    }
  }, [selectedFilter]);
  const viewport = useViewport();

  const divider = useMemo(() => {
    switch (viewport) {
      case "small":
        return 1;
        break;
      case "medium":
        return 3;
        break;
      case "large":
        return 4;
        break;
      default:
        return 4;
    }
  }, [viewport]);

  return (
    <>
      <Filter
        filterItems={filterItems}
        className={"mb-6"}
        onFilterChange={(selectedFilter, all) =>
          setSelectedFilter(selectedFilter.key)
        }
      />
      <section
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start grid-flow-row gap-6 "
        }
      >
        {filteredProjects?.map((project, i) => (
          <ProjectCard
            className={cn((i + 1) % divider === 0 && "row-span-2 col-span-2")}
            key={project.id}
            data={{
              href: `/projects/${project.id}`,
              previewImg: {
                src: project.images?.at(0) ?? "",
                alt: project.name ?? "",
              },
              title: project.name ?? "",
              description: project.type ?? "",
              tags:
                project?.myTechnologies?.flatMap((tech) => tech.name ?? []) ??
                [],
            }}
          />
        ))}
      </section>
    </>
  );
};
