"use client";
import { ExperienceAccordion } from "@/components/expereince-accordion";
import { Wrapper } from "@/components/wrapper";
import { FC, Key } from "react";

interface IExperienceSkeletonProps extends React.HTMLAttributes<HTMLElement> {}

export const ExperienceSkeleton: FC<IExperienceSkeletonProps> = () => {
  return (
    <Wrapper className={"w-full max-w-[1000px]"}>
      <ExperienceAccordion defaultValue={"item-1"}>
        {Array.from({ length: 2 }).map((_, i) => (
          <ExperienceAccordion.Item
            value={`item-${Number(i) + 1}` as string}
            disabled
            key={i as Key}
          />
        ))}
      </ExperienceAccordion>
    </Wrapper>
  );
};
