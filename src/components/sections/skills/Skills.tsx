import { FC } from "react";
import { Section } from "@/components/section";
import { Wrapper } from "@/components/wrapper";
import { Title } from "@/components/ui/title";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typography from "@/components/ui/typography/Typography";
import { SkillCard } from "@/components/skill-card/SkillCard";
import { cn } from "@/lib/utils";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { getSpheres } from "@/api/getSpheres";

interface ISkillsProps {
  content?: string[];
}

type Skill = {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  contentList: string[];
};

const skills: Skill[] = [
  {
    title: "UX/UI-дизайн",
    image: {
      src: "/imgs/skills/uxui-designer.svg",
      alt: "uxui-designer",
    },
    contentList: [
      "Разработка логотипов",
      "Разработка макетов интерфейсов",
      "Анализ аудитории",
    ],
  },
  {
    title: "Frontend-разработка",
    image: {
      src: "/imgs/skills/frontend-developer.svg",
      alt: "uxui-designer",
    },
    contentList: [
      "Разработка интерфейсов любой сложности",
      "Верстка сайтов",
      "Интеграция с бэкендом",
      "Разработка Браузерных расширений",
      "Разработка Mini Apps для Телеграм ботов",
    ],
  },
  {
    title: "Backend-разработка",
    image: {
      src: "/imgs/skills/backend-developer.svg",
      alt: "uxui-designer",
    },
    contentList: [
      "Разработка архитектуры приложения",
      "Разработка Телеграм ботов",
      "Разработка Rest Api",
      "Работа с базами данных",
    ],
  },
];

const Skills: FC<ISkillsProps> = async ({ content = [] }) => {
  const spheres = await getSpheres();

  return (
    <Section
      name={"skills"}
      className={"flex flex-col lg:py-32 py-10 md:py-20"}
    >
      <Wrapper className={"w-full"}>
        <Title level={2} className={"text-center mb-4"}>
          Работаю и развиваюсь{" "}
          <span className={"text-my-secondary-100"}>в трех направлениях!</span>
        </Title>
      </Wrapper>
      <Wrapper className={"w-full max-w-[1000px]"}>
        <Typography className={"max-w-[1000px] text-center"}>
          Создаю решения, где сложная функциональность сочитается с хорошо
          продуманным дизайном интерфейса
        </Typography>
      </Wrapper>
      <Wrapper
        className={
          "grid w-full grid-flow-row grid-cols-1 items-center  md:items-stretch md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-0 mt-10 md:mt-20"
        }
      >
        {skills.map((skill, i) => (
          <SkillCard
            className={cn("grow", i === 1 && "order-first xl:order-none")}
            primary={i === 1}
            key={skill.title}
            title={skill.title}
            image={
              <Image
                className={cn("bg-text-gradient bg-clip-text text-transparent")}
                src={skill.image.src}
                alt={skill.image.alt}
                width={50}
                height={50}
              />
            }
          >
            {skill.contentList.map((item) => (
              <Typography className={"mb-4"} key={item}>
                {item}
              </Typography>
            ))}
          </SkillCard>
        ))}
      </Wrapper>
      {/*<Wrapper className={"mt-24 justify-end flex w-full"}>*/}
      {/*  <Button variant={"link"}>*/}
      {/*    Скачать резюме <ArrowDownToLine className={"ml-2 h-5 w-5"} />*/}
      {/*  </Button>*/}
      {/*</Wrapper>*/}
    </Section>
  );
};

export default Skills;
