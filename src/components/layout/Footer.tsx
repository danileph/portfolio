"use client";
import { FC } from "react";
import A from "@/components/ui/a/A";
import { Wrapper } from "@/components/wrapper";
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import { Link } from "react-scroll";
import { socialMedias } from "@/lib/consts/social-medias";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={"bg-black pt-24 pb-4 relative z-10 mt-32"}
      id={"contacts"}
    >
      <Wrapper className={"text-center max-w-[1000px]"}>
        <Typography className={"mb-3"}>Напиши мне</Typography>
        <Title level={2}>Есть проект? Давай обсудим!</Title>
        <div
          className={"space-x-10 flex items-center justify-center w-full mb-24"}
        >
          <Button variant={"primary-link"} className={""}>
            t.me/danileph
          </Button>
          <Typography className={"m-0"}>или</Typography>
          <Button variant={"primary-link"}>danileph@bk.ru</Button>
        </div>
        <Typography className={"text-xs"}>
          © Д. В. Ефремов, {new Date().getFullYear()} г.
        </Typography>
      </Wrapper>
      {/*<Wrapper className={'flex flex-col items-center space-y-6 p-10'}>*/}
      {/*  <A className={'text-sm'}>danileph@bk.ru</A>*/}
      {/*  <ul className={'flex space-x-4'}>*/}
      {/*    {socialMedias.map((socialMedia) => (*/}
      {/*      <a href={socialMedia.src} key={socialMedia.src}>*/}
      {/*        <li className={''}>*/}
      {/*          <Image src={socialMedia.img} alt={socialMedia.alt} width={30} height={35} />*/}
      {/*        </li>*/}
      {/*      </a>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*  <Typography className={'!text-primary-dark text-xs !mb-0'}>© Д. В. Ефремов, {new Date().getFullYear()} г.</Typography>*/}
      {/*  <button onClick={scrollToTop} className={'w-[40px] h-[40px] cursor-pointer'}>*/}
      {/*    <Image src={'/imgs/arrow.svg'} alt={'К началу'} width={40} height={40} />*/}
      {/*  </button>*/}
      {/*</Wrapper>*/}
    </footer>
  );
};

export default Footer;
