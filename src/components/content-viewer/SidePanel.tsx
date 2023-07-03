"use client"
import {FC, useEffect, useMemo, useRef, useState} from 'react';
import Typography from "@/components/ui/typography/Typography";
import {Title} from "@/components/ui/title";
import {IRoute} from "@/types/IRoute";
import {Link} from "react-scroll";
import useViewport from "@/hooks/useViewport";
import ViewerSectionTitle from "@/components/content-viewer/ViewerSectionTitle";
import {useActiveSection} from "@/components/route/hooks/useActiveSection";
import {useScroll} from "@/components/route/hooks/useScroll";

interface ISidePanelProps {
  description: string[];
  title: string;
  sections?: IRoute[];
};

const SidePanel: FC<ISidePanelProps> = ({sections , description, title}) => {
  // const [activeSection, setActiveSection] = useState('');
  const sectionIds = useMemo(() => sections?.map(seciton => seciton.src), [sections])
  const activeSection = useActiveSection(sectionIds ? sectionIds : [], [sectionIds])
  const viewport = useViewport();
  const scrollTo = useScroll();

  return (
    <section className={'relative'}>
      <div className={'sticky top-[90px]'}>
        <div className={'flex justify-center lg:justify-start'}>
          <Title level={2} className={'inline-block'}>{title}</Title>
        </div>
        {description.map((p) => (
          <Typography className={'mb-[60px] lg:text-start text-center'} key={p}>{p}</Typography>
        ))}
        {sections && ['large'].includes(viewport) && (
          <div className={'mt-[40px] flex flex-col gap-4'}>
            {sections.map((section) => (
              <a onClick={() => scrollTo(section.src)} key={section.src} className={`relative cursor-pointer block after:content-[""] after:block after:absolute after:top-0 after:bottom-0 after:m-auto after:h-[2px] ${activeSection === section.src ? 'text-white pl-[90px] after:ml-[-90px] after:w-[70px] after:bg-white' : 'text-primary-dark pl-[60px] after:ml-[-60px] after:w-[40px] after:bg-primary-dark'}`}>
                {section.name.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SidePanel;
