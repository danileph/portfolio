"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { Section } from "@/components/section";
import Heading from "@/components/sections/about/Heading";
import { Wrapper } from "@/components/wrapper";
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import {
  Container,
  Engine,
  IOptions,
  IParticlesOptions,
  RecursivePartial,
} from "tsparticles-engine";
import Particles from "react-tsparticles";
// import {loadFull} from "tsparticles";
import { getHomeContent } from "@/api/getHomeContent";
import { Title } from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Meteors } from "@/components/meteors";
import { useTimeout } from "@/hooks/useTimeout";
import { cn } from "@/lib/utils";

interface IAboutProps {
  content?: string[];
}

const About: FC<IAboutProps> = ({ content = [] }) => {
  const [renderMeteors, setRenderMeteors] = useState(false);
  useTimeout(() => {
    setRenderMeteors(true);
  }, 1000);
  // useEffect(() => {
  //   return () => {
  //     setRenderMeteors(false);
  //   }
  // }, []);
  //
  return (
    <Section name={"about"} className={" lg:pb-[48px] flex flex-col relative"}>
      <Wrapper
        className={
          "w-full min-h-[calc(100vh-40px-60px)] pt-14 pb-10 flex items-center justify-between relative z-30"
        }
      >
        <section className={"h-full items-start mb-20"}>
          <Title className={"mb-8 bg-clip-text lg:text-8xl lg:leading-[1.1]"}>
            Данил Ефремов
          </Title>
          <Title
            level={3}
            className={"font-roboto-mono text-my-natural-300 mb-16"}
          >
            <TypeAnimation
              sequence={[
                "Frontend-разработчик",
                2000,
                "Backend-разработчик",
                2000,
                "UX/UI-дизайнер",
                1000,
              ]}
              className={"font-roboto-mono"}
              repeat={Infinity}
              speed={60}
            />
          </Title>
          <Button className={"block h-[46px] px-4 active:translate-y-1"}>
            Написать мне
          </Button>
        </section>
        <section className={"mr-10 mt-20"}>
          <Image
            src={"/imgs/me.png"}
            alt={"Photo of Danil Efremov"}
            width={700}
            height={700}
          />
        </section>
      </Wrapper>
      <div
        className={cn(
          "h-screen w-full absolute z-20 overflow-hidden invisible",
          renderMeteors && "visible"
        )}
      >
        <Meteors number={30} />
      </div>
    </Section>
  );
};

export default About;
