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
import useWindowDimensions from "@/hooks/useWindowDimensions";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuItem } from "@/components/menu-item/MenuItem";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  // const [activeSection, setActiveSection] = useState('');
  // const [titleHeader, setTitleHeader] = useState('');
  const viewport = useViewport();
  const { width, height } = useWindowDimensions();
  const showNavbar = width > 1210;
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
    setIsAsideOpened(false);
    if (pathname === "/") {
      scrollTo(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <>
      {!showNavbar && (
        <Sheet open={isAsideOpened} onOpenChange={setIsAsideOpened}>
          <SheetContent side={"left"} className={"max-w-[350px]"}>
            <SheetHeader>
              <Image
                src={"/imgs/logo-large.svg"}
                alt={"full-size logo"}
                width={150}
                height={100}
              />
            </SheetHeader>
            <div className="py-8">
              <nav>
                <ul className={"flex flex-col space-y-4 group"}>
                  {routes.map((item, i) => (
                    <li key={item.src}>
                      <MenuItem
                        onClick={() => handleClick(item.src)}
                        active={activeSection === item.src}
                        number={`0${i + 1}`}
                      >
                        {item.name}
                      </MenuItem>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      )}
      <header
        className={cn(
          "sticky z-40 top-0 h-[70px] w-full backdrop-blur-lg",
          scrollPosition.y && scrollPosition.y > 500 && "bg-my-natural-900/70"
        )}
      >
        <Wrapper
          className={"h-full flex space-x-32 justify-between items-center"}
        >
          <div className={"flex space-x-4 items-center"}>
            {!showNavbar && (
              <button onClick={openAside}>
                <Image
                  src={"/imgs/menu.svg"}
                  alt={"menu"}
                  width={50}
                  height={50}
                />
              </button>
            )}
            <Image
              src={"/imgs/logo-large.svg"}
              alt={"full-size logo"}
              width={150}
              height={100}
            />
          </div>
          {showNavbar ? (
            <nav>
              <ul
                className={"flex space-x-8 items-center justify-center group"}
              >
                {routes.map((item, i) => (
                  <li key={item.src}>
                    <MenuItem
                      onClick={() => handleClick(item.src)}
                      active={activeSection === item.src}
                      number={`0${i + 1}`}
                    >
                      {item.name}
                    </MenuItem>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            // <p className={"font-roboto-mono text-my-natural-100 font-semibold"}>
            //   {titleHeader}
            // </p>
            <></>
          )}
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
