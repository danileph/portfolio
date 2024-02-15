import { FC, Suspense } from "react";
import { ContentViewer } from "@/components/content-viewer";
import { IProject } from "@/models/IProject";
import { getProjects } from "@/api/getProjects";
import ProjectBlock from "@/components/content-viewer/ProjectBlock";
import { IRoute } from "@/types/IRoute";
import VeiwerSection from "@/components/content-viewer/ViewerSection";
import { mapRoutes } from "@/lib/helpers/mapRoutes";
import { Section } from "@/components/section";
import { Wrapper } from "@/components/wrapper";
import { Title } from "@/components/ui/title";
import { routes } from "@/lib/consts/routes";
import Typography from "@/components/ui/typography/Typography";
import { TechnologiesClient } from "@/components/sections/technologies/TechnologiesClient";
import { ProjectsClient } from "@/components/sections/projects/ProjectsClient";
import { IFilterItem } from "@/components/filter";

interface IProjectsProps {
  content?: string[];
}

const Projects: FC<IProjectsProps> = async ({ content = [] }) => {
  const sectionRoute = "projects";
  const projects = await getProjects();
  let sections: IRoute[] | undefined;
  let filterItems: IFilterItem[] | undefined;
  if (projects) {
    sections = mapRoutes(projects);
    filterItems = projects.flatMap((project) =>
      project.type ? { key: project.type, label: project.type } : []
    );
  }

  return (
    <Wrapper className={"w-full"}>
      <ProjectsClient filterItems={filterItems} projects={projects} />
    </Wrapper>
  );
};

export default Projects;
