'use client'
import {FC, useCallback, useEffect, useState} from 'react';
import {Section} from "@/components/section";
import Heading from "@/components/sections/about/Heading";
import {Wrapper} from "@/components/wrapper";
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import {Container, Engine, IOptions, IParticlesOptions, RecursivePartial} from "tsparticles-engine";
import Particles from "react-tsparticles";
// import {loadFull} from "tsparticles";
import {getHomeContent} from "@/api/getHomeContent";

interface IAboutProps {
  content?: string[];
};

// const particlesOptions: RecursivePartial<IOptions> = {
//   backgroundMode: {
//     zIndex: 1,
//   },
//   fullScreen: false,
//   fpsLimit: 120,
//   interactivity: {
//     events: {
//       onClick: {
//         enable: false,
//         mode: "push",
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse",
//       },
//       resize: true,
//     },
//     modes: {
//       push: {
//         quantity: 4,
//       },
//       repulse: {
//         distance: 100,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#DBE8D4",
//     },
//     links: {
//       color: "#525E65",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 5,
//     },
//     collisions: {
//       enable: false,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: {
//         default: "bounce",
//       },
//       random: false,
//       speed: 1,
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 1200,
//       },
//       value: 45,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       value: { min: 4, max: 8 },
//     },
//   },
//   detectRetina: true,
// }

const About: FC<IAboutProps> = ({content = []}) => {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadFull(engine);
  // }, []);
  //
  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   await console.log(container);
  // }, []);

  return (
    <Section name={'about'} className={'pt-[50px] lg:pb-[48px] flex flex-col relative'}>
      {/*<Particles className={'absolute top-0 bottom-0 grow blur-[1px]'} id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions} />*/}
      <Heading />
        <Wrapper className={'pt-14 pb-10 flex flex-col justify-center items-center space-x-4 relative z-10'}>
          <Image src={'/imgs/avatar.png'} alt={'avatar'} width={150} height={150} />
          <article className={'box-border bg-secondary-dark-tr rounded-lg sm:px-10 py-10 max-w-[550px]'}>
            {content.map((text,i) => (
              <Typography key={text} style={{marginBottom: content.length - 1 === i ? 0 : ''}} className={'text-center'}>{text}</Typography>
            ))}
          </article>
        </Wrapper>
    </Section>
  )
}

export default About;
