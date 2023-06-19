'use client'
import { FC } from 'react';
import * as Scroll from "react-scroll";
import {Divider} from "@/components/ui/divider";
import useViewport from "@/hooks/useViewport";
import ViewerSectionTitle from "@/components/content-viewer/ViewerSectionTitle";

interface IVeiwerSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  name: string;
  showDivider?: boolean;
};

const VeiwerSection: FC<IVeiwerSectionProps> = ({title, name, children, showDivider = false}) => {
  const viewport = useViewport();

  return (
    <Scroll.Element name={name} className={'lg:pt-[50px] lg:first:mt-[-50px]'}>
      {showDivider && ['large'].includes(viewport) && <Divider  />}
      {!['large'].includes(viewport) && (
        <ViewerSectionTitle>{title.toUpperCase()}</ViewerSectionTitle>
      )}
      <div className={'flex flex-col lg:space-y-0 space-y-[60px]'}>
        {children}
      </div>
    </Scroll.Element>
  )
}

export default VeiwerSection;
