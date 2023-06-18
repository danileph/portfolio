'use client'
import { FC } from 'react';
import A from "@/components/ui/a/A";
import {Wrapper} from "@/components/wrapper";
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import {Link} from "react-scroll";
import {socialMedias} from "@/lib/consts/social-medias";

interface IFooterProps {};



const Footer: FC<IFooterProps> = () => {
  return (
    <footer className={'bg-ellipse-background-footer h-[35vh] bg-no-repeat bg-top bg-cover mt-24'}>
      <Wrapper className={'flex flex-col items-center gap-6 p-10'}>
        <A className={'text-sm'}>danileph@bk.ru</A>
        <ul className={'flex gap-4'}>
          {socialMedias.map((socialMedia) => (
            <a href={socialMedia.src} key={socialMedia.src}>
              <li className={''}>
                <Image src={socialMedia.img} alt={socialMedia.alt} width={30} height={35} />
              </li>
            </a>
          ))}
        </ul>
        <Typography className={'!text-primary-dark text-xs !mb-0'}>© Д. В. Ефремов, {new Date().getFullYear()} г.</Typography>
        <Link to={'about'} className={'w-[40px] h-[40px] cursor-pointer'}>
          <Image src={'/imgs/arrow.svg'} alt={'К началу'} width={40} height={40} />
        </Link>
      </Wrapper>
    </footer>
  )
}

export default Footer;
