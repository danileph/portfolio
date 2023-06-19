"use client"
import {FC, useEffect, useRef, useState} from 'react';
import Typography from "@/components/ui/typography/Typography";
import {Title} from "@/components/ui/title";
import {IRoute} from "@/types/IRoute";
import {Link} from "react-scroll";
import useViewport from "@/hooks/useViewport";
import ViewerSectionTitle from "@/components/content-viewer/ViewerSectionTitle";

interface ISidePanelProps {
  description: string[];
  title: string;
  sections?: IRoute[];
};

const SidePanel: FC<ISidePanelProps> = ({sections , description, title}) => {
  const [activeSection, setActiveSection] = useState('');
  const viewport = useViewport();

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
              <Link onSetActive={(to, element) => setActiveSection(to)} to={section.src} key={section.src} spy smooth duration={500} className={`relative cursor-pointer block after:content-[""] after:block after:absolute after:top-0 after:bottom-0 after:m-auto after:h-[2px] ${activeSection === section.src ? 'text-white pl-[90px] after:ml-[-90px] after:w-[70px] after:bg-white' : 'text-primary-dark pl-[60px] after:ml-[-60px] after:w-[40px] after:bg-primary-dark'}`}>
                {section.name.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SidePanel;
