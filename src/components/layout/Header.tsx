'use client'
import {FC, useEffect, useState} from 'react';
import {routes} from "@/lib/consts/routes";
import {Wrapper} from "@/components/wrapper";
import {Events, Link, scroller, scrollSpy} from "react-scroll";
import {socialMedias} from "@/lib/consts/social-medias";
import Image from "next/image";

interface IHeaderProps {};

const Header: FC<IHeaderProps> = () => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      scrollSpy.update();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={'bg-primary-dark fixed z-30 top-0 h-[50px] w-full'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
      <Wrapper className={' flex justify-center items-center'}>
        <ul className={'flex gap-8 items-center justify-center'}>
          {routes.map((item) => (
            <Link onSetActive={(to, element) => setActiveSection(to)} spy to={item.src} smooth duration={500} className={`${activeSection === item.src && 'text-primary after:bg-primary'} cursor-pointer hover:text-primary relative py-3 after:content-[""] after:h-[4px] after:w-full after:hover:bg-primary after:absolute after:left-0 after:bottom-0`}>{item.name}</Link>
          ))}
        </ul>
        <ul className={'flex gap-4 absolute right-0 items-center mr-4'}>
          {socialMedias.map((socialMedia) => (
            <a href={socialMedia.src} key={socialMedia.src}>
              <li className={''}>
                <Image src={socialMedia.img} alt={socialMedia.alt} width={20} height={20} />
              </li>
            </a>
          ))}
        </ul>
      </Wrapper>
    </header>
  )
}

export default Header;
