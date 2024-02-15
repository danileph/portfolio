import { IRoute } from "@/types/IRoute";
import Technologies from "@/components/sections/technologies/Technologies";
import { Experience } from "@/components/sections/experience";
import Projects from "@/components/sections/projects/Projects";
import { TechnologiesSkeleton } from "@/components/sections/technologies/TechnologiesSkeleton";
import { ExperienceSkeleton } from "@/components/sections/experience/ExperienceSkeleton";
import { ProjectsSkeleton } from "@/components/sections/projects/ProjectsSkeleton";

export const routes: IRoute[] = [
  {
    src: "about",
    name: "О себе",
  },
  {
    src: "tech-stack",
    name: "Стек технологий",
    isShown: true,
    component: <Technologies />,
    fallback: <TechnologiesSkeleton />,
    description:
      "Владею следующими технологиями, которыми успешно пользовался при реализации проектов. Мой стек технологий включает, но не ограничивается ими — я открыт для изучения чего-то нового!",
  },
  {
    src: "experience",
    name: "Опыт работы",
    isShown: true,
    component: <Experience />,
    fallback: <ExperienceSkeleton />,
    description:
      "В ходе моей профессиональной деятельности я сотрудничал с различными компаниями на разных условиях, где решал поставленные задачи.",
  },
  {
    src: "projects",
    name: "Проекты",
    isShown: true,
    component: <Projects />,
    fallback: <ProjectsSkeleton />,
    description:
      "Здесь вы сможете ознакомиться с проектами, над которыми я работал как самостоятельно, так и в рамках командной разработки.",
  },
  {
    src: "contacts",
    name: "Контакты",
  },
];
