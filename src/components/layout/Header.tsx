"use client";
import { FC, useEffect, useMemo, useState } from "react";
import { routes } from "@/lib/consts/routes";
import { Wrapper } from "@/components/wrapper";
import { socialMedias } from "@/lib/consts/social-medias";
import Image from "next/image";
import useViewport from "@/hooks/useViewport";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Link from "next/link";
import { useActiveSection } from "@/components/route/hooks/useActiveSection";
import { usePathname, useRouter } from "next/navigation";
import { useScroll } from "@/components/route/hooks/useScroll";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  // const [activeSection, setActiveSection] = useState('');
  // const [titleHeader, setTitleHeader] = useState('');
  const viewport = useViewport();
  const [isAsideOpened, setIsAsideOpened] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const sectionIds = useMemo(() => routes.map((route) => route.src), [routes]);
  const activeSection = useActiveSection(sectionIds, [pathname]);
  const titleHeader = useMemo(() => {
    return routes.find((route) => route.src === activeSection)?.name;
  }, [activeSection]);
  const scrollTo = useScroll();
  const [scrollPosition] = useWindowScroll();

  const openAside = () => {
    setIsAsideOpened(true);
  };

  const closeAside = () => {
    setIsAsideOpened(false);
  };

  const handleClick = (sectionId: string) => {
    if (pathname === "/") {
      scrollTo(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <>
      {!["medium", "large"].includes(viewport) && isAsideOpened && (
        <div
          className={
            "w-[100vw] top-0 bottom-0 m-auto fixed bg-[rgb(0,0,0,0.3)] flex justify-end right-0 z-50"
          }
        >
          <ClickAwayListener onClickAway={closeAside}>
            <aside
              className={
                "backdrop-blur bg-primary-dark-tr max-w-[300px] h-full bg-primary-dark right-0 relative flex flex-col px-14 py-8"
              }
              style={{
                boxShadow:
                  "0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)",
              }}
            >
              <button onClick={closeAside}>
                <Image
                  src={"/imgs/cross.svg"}
                  alt={"cross"}
                  width={20}
                  height={20}
                  className={"absolute top-[20px] left-[20px]"}
                />
              </button>
              <ul
                className={
                  "flex flex-col space-y-4 justify-center items-start mt-20"
                }
              >
                {routes.map((item) => (
                  // <Link key={item.src} to={item.src} smooth duration={500} className={`${activeSection === item.src && 'text-primary after:bg-primary'} inline-block cursor-pointer hover:text-primary relative py-3 after:content-[""] after:h-[4px] after:w-full after:hover:bg-primary after:absolute after:left-0 after:bottom-0`}>{item.name}</Link>
                  <a
                    onClick={() => handleClick(item.src)}
                    key={item.src}
                    className={`${
                      activeSection === item.src &&
                      "text-primary after:bg-primary"
                    } inline-block cursor-pointer hover:text-primary relative py-3 after:content-[""] after:h-[4px] after:w-full after:hover:bg-primary after:absolute after:left-0 after:bottom-0`}
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
              <div className={"grow"} />
              <ul
                className={
                  "flex space-x-2 justify-between right-0 items-center"
                }
              >
                {socialMedias.map((socialMedia) => (
                  <a href={socialMedia.src} key={socialMedia.src}>
                    <li className={""}>
                      <Image
                        src={socialMedia.img}
                        alt={socialMedia.alt}
                        width={25}
                        height={25}
                      />
                    </li>
                  </a>
                ))}
              </ul>
            </aside>
          </ClickAwayListener>
        </div>
      )}
      <header
        className={cn(
          "sticky z-40 top-0 h-[60px] w-full backdrop-blur-lg",
          scrollPosition.y && scrollPosition.y > 500 && "bg-my-natural-900/70"
        )}
      >
        <Wrapper
          className={"h-full flex space-x-32 justify-between items-center"}
        >
          {["medium", "large"].includes(viewport) ? (
            <>
              <Image
                src={"/imgs/logo-large.svg"}
                alt={"full-size logo"}
                width={150}
                height={100}
              />
              <ul
                className={
                  "flex space-x-8 items-center justify-center font-roboto-mono group text-my-natural-100 font-semibold"
                }
              >
                {routes.map((item, i) => (
                  // <Link key={item.src} onSetActive={(to, element) => setActiveSection(to)} spy to={item.src} smooth duration={500} className={`${activeSection === item.src && 'text-primary after:bg-primary'} hidden md:block cursor-pointer hover:text-primary relative py-3 after:content-[""] after:h-[4px] after:w-full after:hover:bg-primary after:absolute after:left-0 after:bottom-0`}>{item.name}</Link>
                  <a
                    onClick={() => handleClick(item.src)}
                    key={item.src}
                    className={`${
                      activeSection === item.src && "text-my-secondary-100"
                    } inline-block cursor-pointer transition group-hover:brightness-50 hover:!filter-none py-3 before:content-["//_"] lowercase relative`}
                  >
                    <span
                      className={"absolute top-0 text-2xs right-0 font-normal"}
                    >
                      0{i + 1}
                    </span>
                    {item.name}
                  </a>
                ))}
              </ul>
            </>
          ) : (
            <>
              <div className={"flex justify-between items-center w-full"}>
                <p>{titleHeader}</p>
                <button onClick={openAside}>
                  <Image
                    src={"/imgs/menu.svg"}
                    alt={"menu"}
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </>
          )}
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
