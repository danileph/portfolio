import { FC, Suspense, useMemo } from "react";
import { Section } from "@/components/section";
import { Wrapper } from "@/components/wrapper";
import { ContentViewer } from "@/components/content-viewer";
import { IExperience } from "@/models/IExperience";
import { ITechnology } from "@/models/ITechnology";
import { IProject } from "@/models/IProject";
import { getExperience } from "@/api/getExperience";
import { getTechnologies } from "@/api/getTechnologies";
import { log } from "util";
import { getProjects } from "@/api/getProjects";
import ExperienceBlock from "@/components/content-viewer/ExperienceBlock";
import { Title } from "@/components/ui/title";
import { routes } from "@/lib/consts/routes";
import Typography from "@/components/ui/typography/Typography";
import { TechnologiesClient } from "@/components/sections/technologies/TechnologiesClient";
import { ExperienceAccordion } from "@/components/expereince-accordion";
import { DATE_FORMAT } from "@/lib/consts/date-format";
import { Tag } from "@/components/ui/tag";
import {
  ExperienceClient,
  IExperienceClient,
} from "@/components/sections/experience/ExperienceClient";
import dayjs from "dayjs";

interface IExperienceProps {
  content?: string[];
}

const Experience: FC<IExperienceProps> = async ({ content = [] }) => {
  const sectionRoute = "experience";
  const experiences = await getExperience();
  const technologies =
    experiences
      ?.flatMap(
        (exp) =>
          exp.projects?.flatMap(
            (project) =>
              project.myTechnologies?.map((tech) => ({
                expId: exp.id ?? "",
                techName: tech.name ?? "",
              })) ?? []
          ) ?? []
      )
      .filter(
        (value, i, array) =>
          array.findIndex((item) => item.techName === value.techName) === i
      ) ?? [];
  const experienceForClient: IExperienceClient[] =
    experiences?.map(({ period, ...exp }) => ({
      ...exp,
      workingPeriod: `${period?.start?.format(DATE_FORMAT).toUpperCase()} — ${
        period?.end?.isValid()
          ? period?.end?.format(DATE_FORMAT).toUpperCase()
          : "ПО Н. В."
      }`,
    })) ?? [];

  return (
    <Wrapper className={"w-full max-w-[1000px]"}>
      <ExperienceClient
        experiences={experienceForClient}
        technologies={technologies}
      />
    </Wrapper>
  );

  // return (
  //   <ContentViewer
  //     name={"experience"}
  //     title={"Опыт работы"}
  //     description={content}
  //   >
  //     {experiences?.map((experience) => (
  //       <ExperienceBlock key={experience.id} data={experience} />
  //     ))}
  //   </ContentViewer>
  // );
};

export default Experience;
