import { FC } from 'react';
import Typography from "@/components/ui/typography/Typography";
import dayjs from "dayjs";
import {DATE_FORMAT} from "@/lib/consts/date-format";
import {Title} from "@/components/ui/title";
import {Ref} from "@/components/ui/ref";
import {Tag} from "@/components/ui/tag";
import {IExperience} from "@/models/IExperience";
import {IProject} from "@/models/IProject";
import Image from "next/image";

interface IProjectBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IProject;
};

const ProjectBlock: FC<IProjectBlockProps> = ({data}) => {
  return (
    <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 gap-6 lg:p-8 rounded-lg lg:cursor-pointer lg:hover:shadow-md lg:hover:bg-secondary'}>
      <div className={''}>
       <Image className={'border-primary-dark border-4 rounded-md'} src={data.images && data.images.length !== 0 ? data.images[0] : '/imgs/img-placeholder.svg'} alt={data.name ? data.name : ''} width={200} height={100} />
      </div>
      <div className={'grow'}>
        <Title level={3} className={'mb-[10px]'}>{data.name}</Title>
        <Typography className={'text-sm mb-[18px] leading-[1.3rem]'}>{data.description}</Typography>
        <div className={'flex gap-2 flex-wrap'}>
          {data.myTechnologies?.map((tech) => (
            <Tag key={tech.id}>{tech.name}</Tag>
          ))}
          {data.otherTechnologies?.map((tech) => (
            <Tag key={tech.id}>{tech.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectBlock;
