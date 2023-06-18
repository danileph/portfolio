'use client'
import {FC, useEffect} from 'react';
import {Wrapper} from "@/components/wrapper";
import * as Scroll from 'react-scroll';
import {animateScroll} from "react-scroll";

interface ISectionProps extends React.HTMLAttributes<HTMLElement>{
  name: string;
};

const Section: FC<ISectionProps> = ({ className, name, children, ...other}) => {

  return (
    <Scroll.Element name={name} className={`min-h-screen box-border flex flex-col items-stretch ${className}`} {...other}>
      {children}
    </Scroll.Element>
  )
}

export default Section;
