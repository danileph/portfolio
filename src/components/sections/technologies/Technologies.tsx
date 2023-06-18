import {FC} from "react";
import {getProjects} from "@/api/getProjects";
import {ContentViewer} from "@/components/content-viewer";
import {getTechnologies} from "@/api/getTechnologies";
import TechnologyBlock from "@/components/content-viewer/TechnologyBlock";
import {IRoute} from "@/types/IRoute";
import {mapRoutes} from "@/lib/helpers/mapRoutes";
import VeiwerSection from "@/components/content-viewer/ViewerSection";
import ProjectBlock from "@/components/content-viewer/ProjectBlock";
import {ITechnology} from "@/models/ITechnology";

interface IProjectsProps {
  content?: string[];
};

const Technologies: FC<IProjectsProps> = async ({content = []}) => {
  const _technologies = await getTechnologies();
  let technologies: ITechnology[] | undefined;
  let sections: IRoute[] | undefined;

  if (_technologies) {
    technologies = _technologies.filter(tech => tech.grade)
  }
  if (technologies) {
    sections = mapRoutes(technologies);
  }

  return (
    <ContentViewer name={'tech-stack'} title={'Стек технологий'} description={content} sections={sections}>
      {sections?.map((section, i) => (
        <VeiwerSection title={section.name} name={section.src} key={section.src} showDivider={0 !== i}>
          {technologies
            ?.filter(technology => technology.type === section.src)
            ?.map((technology) => (
              <TechnologyBlock key={technology.name} data={technology} />
            ))
          }
        </VeiwerSection>
      ))}
    </ContentViewer>
  )
}

export default Technologies;