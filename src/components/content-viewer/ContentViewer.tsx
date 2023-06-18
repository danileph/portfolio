import {FC, useEffect, useRef, useState} from 'react';
import {Wrapper} from "@/components/wrapper";
import {Section} from "@/components/section";
import {Title} from "@/components/ui/title";
import Typography from "@/components/ui/typography/Typography";
import ExperienceBlock from "@/components/content-viewer/ExperienceBlock";
import ProjectBlock from "@/components/content-viewer/ProjectBlock";
import TechnologyBlock from "@/components/content-viewer/TechnologyBlock";
import SidePanel from "@/components/content-viewer/SidePanel";
import {IRoute} from "@/types/IRoute";

interface IContentViewerProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string[];
  name: string;
  sections?: IRoute[];
};

interface IContentViewerCompound {
  ExperienceBlock: typeof ExperienceBlock;
  ProjectBlock: typeof ProjectBlock;
  TechnologyBlock: typeof TechnologyBlock;
}

const ContentViewer: FC<IContentViewerProps> & IContentViewerCompound = ({sections, name, children, description = [], title,}) => {
  return (
    <Section name={name} className={'py-32'}>
      <Wrapper className={'grid grid-cols-[minmax(200px,350px)_1fr] gap-36 w-full'}>
        <SidePanel description={description} title={title} sections={sections} />
        <section className={'flex flex-col gap-2'}>
          {children}
        </section>
      </Wrapper>
    </Section>
  )
}

ContentViewer.ExperienceBlock = ExperienceBlock;
ContentViewer.ProjectBlock = ProjectBlock;
ContentViewer.TechnologyBlock = TechnologyBlock;

export default ContentViewer;
