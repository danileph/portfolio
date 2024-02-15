"use client";
import { FC, useMemo, useState } from "react";
import { Filter, IFilterItem } from "@/components/filter";
import { TechCard } from "@/components/ui/tech-card/TechCard";
import { ITechnology } from "@/models/ITechnology";

interface ITechnologiesClientProps extends React.HTMLAttributes<HTMLElement> {
  filterItems?: IFilterItem[];
  technologies?: ITechnology[];
}

export const TechnologiesClient: FC<ITechnologiesClientProps> = ({
  filterItems,
  technologies,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const filteredTechnologies = useMemo(() => {
    if (!selectedFilter) return;
    if (selectedFilter === "all") {
      return technologies;
    } else {
      return technologies?.filter((tech) =>
        tech?.spheres?.find((sphere) => sphere.id === selectedFilter)
      );
    }
  }, [selectedFilter]);

  return (
    <>
      <Filter
        filterItems={filterItems}
        className={"mb-6"}
        onFilterChange={(selectedFilter, all) =>
          setSelectedFilter(selectedFilter.key)
        }
      />
      <section className={"grid grid-cols-3 grid-flow-row gap-6"}>
        {filteredTechnologies?.map((tech) => (
          <TechCard
            className={"flex-1"}
            key={tech.id}
            data={{
              image: { src: tech.images?.at(0) ?? "", alt: tech.name ?? "" },
              grade: Number(tech.grade),
              name: tech.name ?? "",
            }}
          />
        ))}
      </section>
    </>
  );
};
