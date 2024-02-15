import { FC, Suspense } from "react";
import { getProjects } from "@/api/getProjects";
import { ContentViewer } from "@/components/content-viewer";
import { getTechnologies } from "@/api/getTechnologies";
import TechnologyBlock from "@/components/content-viewer/TechnologyBlock";
import { IRoute } from "@/types/IRoute";
import { mapRoutes } from "@/lib/helpers/mapRoutes";
import VeiwerSection from "@/components/content-viewer/ViewerSection";
import ProjectBlock from "@/components/content-viewer/ProjectBlock";
import { ITechnology } from "@/models/ITechnology";
import { Section } from "@/components/section";
import { Wrapper } from "@/components/wrapper";
import SidePanel from "@/components/content-viewer/SidePanel";
import { Title } from "@/components/ui/title";
import { routes } from "@/lib/consts/routes";
import { Filter, IFilterItem, IFlattenedFilterItem } from "@/components/filter";
import Typography from "@/components/ui/typography/Typography";
import { TechCard } from "@/components/ui/tech-card/TechCard";
import { TechnologiesClient } from "@/components/sections/technologies/TechnologiesClient";

interface IProjectsProps {
  content?: string[];
}

const Technologies: FC<IProjectsProps> = async ({ content = [] }) => {
  const sectionRoute = "tech-stack";
  const _technologies = await getTechnologies();
  let technologies: ITechnology[] | undefined;
  let sections: IRoute[] | undefined;
  let filterItems: IFilterItem[] | undefined;
  // console.dir(_technologies, { depth: null });

  if (_technologies) {
    technologies = _technologies.filter((tech) => tech.grade);
  }
  if (technologies) {
    sections = mapRoutes(technologies);
    filterItems = technologies.flatMap((tech) => {
      if (!!tech.spheres) {
        return tech.spheres.flatMap((sphere) =>
          !!sphere.id && !!sphere.name
            ? {
                key: sphere.id,
                label: sphere.name,
              }
            : []
        );
      } else return [];
    });
  }

  return (
    <Wrapper className={"w-full"}>
      <TechnologiesClient
        filterItems={filterItems}
        technologies={technologies}
      />
    </Wrapper>
  );

  // return (
  //   <ContentViewer name={'tech-stack'} title={'Стек технологий'} description={content} sections={sections}>
  //     {sections?.map((section, i) => (
  //       <VeiwerSection title={section.name} name={section.src} key={section.src} showDivider={0 !== i}>
  //         {technologies
  //           ?.filter(technology => technology.type === section.src)
  //           ?.map((technology) => (
  //             <TechnologyBlock key={technology.name} data={technology} />
  //           ))
  //         }
  //       </VeiwerSection>
  //     ))}
  //   </ContentViewer>
  // )
};

export default Technologies;
