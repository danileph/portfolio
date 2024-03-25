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
import useViewport from "@/hooks/useViewport";

interface IAboutProps {
  content?: string[];
}

const About: FC<IAboutProps> = ({ content = [] }) => {
  const [renderMeteors, setRenderMeteors] = useState(false);
  const [mainImgSize, setMainImgSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  useTimeout(() => {
    setRenderMeteors(true);
  }, 1000);
  const viewport = useViewport();
  useEffect(() => {
    switch (viewport) {
      case "small":
        setMainImgSize({ width: 200, height: 200 });
        break;
      case "medium":
        setMainImgSize({ width: 300, height: 300 });
        break;
      case "large":
        setMainImgSize({ width: 400, height: 400 });
        break;
      case "extra-large":
        setMainImgSize({ width: 500, height: 500 });
        break;
    }
  }, [viewport]);

  return (
    <Section name={"about"} className={" lg:pb-[48px] flex flex-col relative"}>
      <Wrapper
        className={
          "w-full min-h-[calc(100vh-40px-70px)] pt-14 pb-10 flex flex-col md:flex-row items-center justify-center xl:justify-between relative z-30"
        }
      >
        <section
          className={
            "h-full flex flex-col items-center md:items-start mb-20 order-1 md:order-none text-center md:text-start -translate-y-[60px] md:translate-y-0"
          }
        >
          <Title
            className={
              "mb-4 text-5xl md:mb-8 bg-clip-text xl:text-8xl leading-[1.1]"
            }
          >
            Данил
            <br />
            Ефремов
          </Title>
          <Title
            level={3}
            className={"font-roboto-mono text-my-natural-300 mb-10 md:mb-16"}
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
          <a href={"https://www.t.me/danileph"} target="_blank">
            <Button className={"block h-[46px] px-4 active:translate-y-1"}>
              Написать мне
            </Button>
          </a>
        </section>
        <section className={"xl:mr-10 xl:mt-20"}>
          <Image
            src={"/imgs/me.png"}
            alt={"Photo of Danil Efremov"}
            width={mainImgSize.width}
            height={mainImgSize.height}
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
