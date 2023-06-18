import { FC } from 'react';
import {Section} from "@/components/section";
import {Wrapper} from "@/components/wrapper";
import {ContentViewer} from "@/components/content-viewer";
import {IExperience} from "@/models/IExperience";
import {ITechnology} from "@/models/ITechnology";
import {IProject} from "@/models/IProject";
import {getExperience} from "@/api/getExperience";
import {getTechnologies} from "@/api/getTechnologies";
import {log} from "util";
import {getProjects} from "@/api/getProjects";
import ExperienceBlock from "@/components/content-viewer/ExperienceBlock";


interface IExperienceProps {
  content?: string[];
};

const Experience: FC<IExperienceProps> = async ({content = []}) => {
  // const experiences: IExperience[] = [
  //   {
  //     company: 'ООО "Смарт Решения"',
  //     position: 'Frontend разработчик',
  //     achievements: 'Разрабатывал интерфейсы для сложных систем. Настраивал интеграцию с API',
  //     projects: [
  //       {
  //         name: 'РРЦ',
  //         description: 'dd',
  //         content: '',
  //         techStack: [
  //           {
  //             name: 'string',
  //             docRef: 'string',
  //             isOwned: true,
  //           }
  //         ]
  //       },
  //     ],
  //     techStack: [
  //       {
  //         name: 'React',
  //         docRef: 'string',
  //         isOwned: true,
  //       },
  //       {
  //         name: 'TS',
  //         docRef: 'string',
  //         isOwned: true,
  //       },
  //       {
  //         name: 'Styled components',
  //         docRef: 'string',
  //         isOwned: true,
  //       }
  //     ],
  //     period: {
  //       start: new Date(),
  //       end: new Date(),
  //     }
  //   },
  //   {
  //     company: 'ООО "Смарт Решения"',
  //     position: 'Frontend разработчик',
  //     achievements: 'Разрабатывал интерфейсы для сложных систем. Настраивал интеграцию с API',
  //     projects: [
  //       {
  //         name: 'Adapter',
  //         description: 'dd',
  //         content: '',
  //         techStack: [
  //           {
  //             name: 'string',
  //             docRef: 'string',
  //             isOwned: true,
  //           }
  //         ]
  //       },
  //     ],
  //     techStack: [
  //       {
  //         name: 'React',
  //         docRef: 'string',
  //         isOwned: true,
  //       },
  //       {
  //         name: 'TS',
  //         docRef: 'string',
  //         isOwned: true,
  //       },
  //       {
  //         name: 'Styled components',
  //         docRef: 'string',
  //         isOwned: true,
  //       }
  //     ],
  //     period: {
  //       start: new Date(),
  //       end: new Date(),
  //     }
  //   },
  //   {
  //     company: 'ООО "Смарт Решения"',
  //     position: 'Frontend разработчик',
  //     achievements: 'Разрабатывал интерфейсы для сложных систем. Настраивал интеграцию с API',
  //     projects: [
  //       {
  //         name: '',
  //         description: 'dd',
  //         content: '',
  //         techStack: [
  //           {
  //             name: 'string',
  //             docRef: 'string',
  //             isOwned: true,
  //           }
  //         ]
  //       },
  //     ],
  //     techStack: [
  //       {
  //         name: 'React',
  //         docRef: 'string',
  //         isOwned: true,
  //       },
  //       {
  //         name: 'TS',
  //         docRef: 'string',
  //         isOwned: true,
  //       },
  //       {
  //         name: 'Styled components',
  //         docRef: 'string',
  //         isOwned: true,
  //       }
  //     ],
  //     period: {
  //       start: new Date(),
  //       end: new Date(),
  //     }
  //   }
  // ]
  const experiences = await getExperience();

  return (
    <ContentViewer name={'experience'} title={'Опыт работы'} description={content}>
      {experiences?.map((experience) => (
        <ExperienceBlock key={experience.id} data={experience} />
      ))}
    </ContentViewer>
  )
}

export default Experience;
