"use client";
import { FC, useMemo } from "react";
import { ExperienceAccordion } from "@/components/expereince-accordion";
import { DATE_FORMAT } from "@/lib/consts/date-format";
import { IExperience } from "@/models/IExperience";
import { ITechnology } from "@/models/ITechnology";

export interface IExperienceClient extends Omit<IExperience, "period"> {
  workingPeriod: string;
}

interface IExperienceClientProps extends React.HTMLAttributes<HTMLElement> {
  experiences: IExperienceClient[] | undefined;
  technologies: { expId: string; techName: string }[];
}

export const ExperienceClient: FC<IExperienceClientProps> = ({
  experiences,
  technologies,
}) => {
  return (
    <ExperienceAccordion defaultValue={"item-1"}>
      {experiences?.map((exp, i) => (
        <ExperienceAccordion.Item
          value={`item-${i + 1}`}
          key={exp.id}
          data={{
            city: exp.city ?? "",
            company: {
              name: exp.company ?? "",
              site: exp.site ?? "",
              img: {
                src: exp.images?.at(0) ?? "",
                alt: exp.company ?? "",
              },
            },
            // workingPeriod: `${exp.period?.start
            //   ?.format(DATE_FORMAT)
            //   .toUpperCase()} — ${
            //   exp.period?.end?.isValid()
            //     ? exp.period?.end?.format(DATE_FORMAT).toUpperCase()
            //     : "ПО Н. В."
            // }`,
            workingPeriod: exp.workingPeriod,
            projects:
              exp.projects?.map((project) => ({
                name: project.name ?? "",
                link: `/projects/${project.id}`,
              })) ?? [],
            technologies: [
              ...(exp.technologies?.map((tech) => tech.name ?? "") ?? []),
              ...technologies
                .filter((item) => item.expId === exp.id)
                .map((item) => item.techName ?? ""),
            ],
            mainContent: exp.achievements ?? "",
          }}
        />
      ))}
    </ExperienceAccordion>
  );
};
