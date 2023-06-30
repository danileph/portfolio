'use client'
import {FC, useEffect, useState} from 'react';
import {routes} from "@/lib/consts/routes";
import {Wrapper} from "@/components/wrapper";
import {Events, Link, scroller, scrollSpy} from "react-scroll";
import {socialMedias} from "@/lib/consts/social-medias";
import Image from "next/image";
import useViewport from "@/hooks/useViewport";
import ClickAwayListener from '@mui/base/ClickAwayListener';

interface IHeaderProps {};

const Header: FC<IHeaderProps> = () => {
  const [activeSection, setActiveSection] = useState('');
  const [titleHeader, setTitleHeader] = useState('');
  const viewport = useViewport();
  const [isAsideOpened, setIsAsideOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollSpy.update();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openAside = () => {
  setIsAsideOpened(true)
  }

  const closeAside = () => {
    setIsAsideOpened(false)
  }

  useEffect(() => {
    const name = routes.find(route => route.src === activeSection)?.name;
    console.log(activeSection)
    setTitleHeader(name ? name : '')
  }, [activeSection])

  return (
    <>
      {!['medium', 'large'].includes(viewport) && isAsideOpened && (
        <div className={'w-[100vw] top-0 bottom-0 m-auto fixed bg-[rgb(0,0,0,0.3)] flex justify-end right-0 z-50'}>
          <ClickAwayListener onClickAway={closeAside}>
            <aside className={'backdrop-blur bg-primary-dark-tr max-w-[300px] h-full bg-primary-dark right-0 relative flex flex-col px-14 py-8'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
              <button onClick={closeAside}><Image src={'/imgs/cross.svg'} alt={'cross'} width={20} height={20} className={'absolute top-[20px] left-[20px]'} /></button>
              <ul className={'flex flex-col space-y-4 justify-center items-start mt-20'}>
                {routes.map((item) => (
                  <Link key={item.src} to={item.src} smooth duration={500} className={`${activeSection === item.src && 'text-primary after:bg-primary'} inline-block cursor-pointer hover:text-primary relative py-3 after:content-[""] after:h-[4px] after:w-full after:hover:bg-primary after:absolute after:left-0 after:bottom-0`}>{item.name}</Link>
                ))}
              </ul>
              <div className={'grow'} />
              <ul className={'flex space-x-2 justify-between right-0 items-center'}>
                {socialMedias.map((socialMedia) => (
                  <a href={socialMedia.src} key={socialMedia.src}>
                    <li className={''}>
                      <Image src={socialMedia.img} alt={socialMedia.alt} width={25} height={25} />
                    </li>
                  </a>
                ))}
              </ul>
            </aside>
          </ClickAwayListener>
        </div>
      )}
    <header className={'bg-primary-dark fixed z-30 top-0 h-[50px] w-full'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
      <Wrapper className={'h-full flex md:justify-center items-center'}>
        <ul className={'flex space-x-8 items-center justify-center'}>
          {routes.map((item) => (
            <Link key={item.src} onSetActive={(to, element) => setActiveSection(to)} spy to={item.src} smooth duration={500} className={`${activeSection === item.src && 'text-primary after:bg-primary'} hidden md:block cursor-pointer hover:text-primary relative py-3 after:content-[""] after:h-[4px] after:w-full after:hover:bg-primary after:absolute after:left-0 after:bottom-0`}>{item.name}</Link>
          ))}
        </ul>
        {['medium', 'large'].includes(viewport) ? (
            <ul className={'flex space-x-2 absolute mr-4 right-0 items-center'}>
              {socialMedias.map((socialMedia) => (
                <a href={socialMedia.src} key={socialMedia.src}>
                  <li className={''}>
                    <Image src={socialMedia.img} alt={socialMedia.alt} width={20} height={20} />
                  </li>
                </a>
              ))}
            </ul>
        ) : (
            <>
              <div className={'flex justify-between items-center w-full'}>
                <p>{titleHeader}</p>
                <button onClick={openAside}>
                  <Image src={'/imgs/menu.svg'} alt={'menu'} width={25} height={25}/>
                </button>
              </div>
            </>
        )}
      </Wrapper>
    </header>
    </>
  )
}

export default Header;
