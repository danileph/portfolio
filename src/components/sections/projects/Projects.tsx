import { FC } from 'react';
import {ContentViewer} from "@/components/content-viewer";
import {IProject} from "@/models/IProject";
import {getProjects} from "@/api/getProjects";
import ProjectBlock from "@/components/content-viewer/ProjectBlock";
import {IRoute} from "@/types/IRoute";
import VeiwerSection from "@/components/content-viewer/ViewerSection";
import {mapRoutes} from "@/lib/helpers/mapRoutes";

interface IProjectsProps {
  content?: string[];
};

const Projects: FC<IProjectsProps> = async ({content = []}) => {
  const projects = await getProjects();
  let sections: IRoute[] | undefined;
  if (projects) {
    sections = mapRoutes(projects);
  }

  return (
    <ContentViewer name={'projects'} title={'Проекты'} description={content} sections={sections}>
      {sections?.map((section, i) => (
        <VeiwerSection title={section.name} name={section.src} key={section.src} showDivider={0 !== i}>
          {projects
            ?.filter(project => project.type === section.src)
            ?.map((project) => (
              <ProjectBlock key={project.name} data={project} />
            ))
          }
        </VeiwerSection>
      ))}
    </ContentViewer>
  )
}

export default Projects;
