import { getProjectContent } from "@/api/getProjectContent";
import { getProjects } from "@/api/getProjects";
import { Wrapper } from "@/components/wrapper";
import { Author } from "@/app/projects/[projectId]/author";
import Typography from "@/components/ui/typography/Typography";
import { Title } from "@/components/ui/title";
import { getExperience } from "@/api/getExperience";
import { Tag } from "@/components/ui/tag";
import React, { Suspense } from "react";
import Loading from "@/app/projects/[projectId]/loading";
import A from "@/components/ui/a/A";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ProjectCarousel } from "@/app/projects/[projectId]/project-carousel/ProjectCarousel";
import { ExternalLink, Github } from "lucide-react";

export const revalidate = 0;
export default async function Project({
  params,
}: {
  params: { projectId: string };
}) {
  const _projectData = getProjectContent(params.projectId);
  const _projects = getProjects();
  const _experience = getExperience();
  const [projectData, projects, experience] = await Promise.all([
    _projectData,
    _projects,
    _experience,
  ]);
  const thisProject = projects?.find(
    (project) => project.id === params.projectId
  );
  const thisExperience = experience?.find((exp) =>
    exp?.projects?.find((project) => project.id === params.projectId)
  );
  const images: { src: string; alt: string }[] = thisProject?.images
    ? thisProject?.images?.map((img) => ({
        src: img,
        alt: thisProject?.name ? thisProject.name : "",
      }))
    : [];

  // return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <main className={"relative z-10 pb-10 md:pb-20 pt-10 md:pt-28"}>
        <Wrapper className={"max-w-[1000px]"}>
          {/*<div className={"flex items-center space-x-8 mb-6"}>*/}
          {/*  <A href={""} className={"inline-flex items-center"}>*/}
          {/*    <Github className={"h-3.5 w-3.5 mr-2"} />*/}
          {/*    GitHub*/}
          {/*  </A>*/}
          {/*  <A href={""} external className={"inline-flex items-center"}>*/}
          {/*    <ExternalLink className={"h-3.5 w-3.5 mr-2"} />*/}
          {/*    Перейти на сайт*/}
          {/*  </A>*/}
          {/*</div>*/}
          <Title>{thisProject?.name}</Title>
          <div
            className={
              "grid grid-cols-[minmax(min-content,_100px)_auto] grid-flow-row gap-4 justify-items-start max-w-[600px] md:my-24 items-baseline"
            }
          >
            <span className={"col-span-1 font-roboto-mono uppercase text-xs"}>
              Тип:
            </span>
            <Typography className={"col-span-1 m-0 font-semibold"}>
              {thisProject?.type}
            </Typography>
            {thisExperience?.company && (
              <>
                <span
                  className={"col-span-1 uppercase text-xs font-roboto-mono"}
                >
                  Организация:
                </span>
                <Typography className={"col-span-1 m-0 font-semibold"}>
                  {thisExperience?.company}
                </Typography>
              </>
            )}
            <span className={"col-span-1 font-roboto-mono uppercase text-xs"}>
              Технологии:
            </span>

            <div className={"flex flex-wrap -mt-2 mb-6 col-span-1"}>
              {thisProject?.myTechnologies?.map((tech) => (
                <Tag key={tech.id} className={"mt-2 mr-2"}>
                  {tech.name}
                </Tag>
              ))}
              {thisProject?.otherTechnologies?.map((tech) => (
                <Tag key={tech.name} className={"mt-2 mr-2"}>
                  {tech.name}
                </Tag>
              ))}
            </div>
          </div>
        </Wrapper>
        <ProjectCarousel images={images} />
        <Wrapper className={"max-w-[1000px]"}>
          {projectData?.map((block) => {
            if (block.type === "heading_1")
              return (
                <Title level={3} className={"!mb-6"}>
                  {block.content}
                </Title>
              );
            else if (block.type === "paragraph")
              return <Typography className={""}>{block.content}</Typography>;
          })}
        </Wrapper>
      </main>
    </Suspense>
  );
}
