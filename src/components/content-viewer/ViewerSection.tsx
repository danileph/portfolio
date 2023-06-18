'use client'
import { FC } from 'react';
import * as Scroll from "react-scroll";
import {Divider} from "@/components/ui/divider";

interface IVeiwerSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  name: string;
  showDivider?: boolean;
};

const VeiwerSection: FC<IVeiwerSectionProps> = ({name, children, showDivider = false}) => {
  return (
    <Scroll.Element name={name} className={'pt-[50px] first:mt-[-50px]'}>
      {showDivider && <Divider  />}
      <div className={'flex flex-col gap-2'}>
        {children}
      </div>
    </Scroll.Element>
  )
}

export default VeiwerSection;
