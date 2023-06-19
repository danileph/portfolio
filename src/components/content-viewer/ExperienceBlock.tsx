import { FC } from 'react';
import {IExperience} from "@/models/IExperience";
import Typography from "@/components/ui/typography/Typography";
import {Title} from "@/components/ui/title";
import dayjs from "dayjs";
import {DATE_FORMAT} from "@/lib/consts/date-format";
import {Tag} from "@/components/ui/tag";
import {Ref} from "@/components/ui/ref";

interface IExperienceBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IExperience
};


const ExperienceBlock: FC<IExperienceBlockProps> = ({data}) => {

  return (
    <div className={'md:grid sm:block grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] gap-8 lg:p-8 rounded-lg lg:cursor-pointer lg:hover:shadow-md lg:hover:bg-secondary'}>
      <div className={''}>
        <Typography className={'text-xs !mb-0'}>{data.period?.start?.format(DATE_FORMAT).toUpperCase()} — {data.period?.end?.isValid() ? data.period?.end?.format(DATE_FORMAT).toUpperCase() : 'ПО Н. В.'}</Typography>
      </div>
      <div className={'grow'}>
        <Title level={3}>{data.company}</Title>
        <Typography className={'!text-primary-dark text-lg mb-[10px]'}>{data.position}</Typography>
        <Typography className={'text-sm mb-[calc(14px-0.5rem)] leading-[1.3rem]'}>{data.achievements}</Typography>
        <div className={'flex mb-[calc(18px-0.5rem)]'}>
          {data.projects?.map((project) => (
            <Ref key={project.name} className={'mt-2 mr-2'}>{project.name}</Ref>
          ))}
        </div>
        <div className={'flex flex-wrap'}>
          {data.projects?.flatMap((project) => project.myTechnologies?.flatMap(tech => (
            <Tag key={tech.id} className={'mt-2 mr-2'}>{tech.name}</Tag>
          )))}
          {data.technologies?.map((tech) => (
            <Tag key={tech.name} className={'mt-2 mr-2'}>{tech.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceBlock;
