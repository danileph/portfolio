import {IExperience} from "@/models/IExperience";
import {FC} from "react";
import Typography from "@/components/ui/typography/Typography";
import {DATE_FORMAT} from "@/lib/consts/date-format";
import {Title} from "@/components/ui/title";
import {Ref} from "@/components/ui/ref";
import {Tag} from "@/components/ui/tag";
import {ITechnology} from "@/models/ITechnology";
import Image from "next/image";
import {Rate} from "../ui/rate";

interface ITechnologyBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ITechnology
};


const TechnologyBlock: FC<ITechnologyBlockProps> = ({data}) => {

  return (
    <div className={'grid grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] gap-8 p-8 rounded-lg cursor-pointer hover:shadow-md hover:bg-secondary'}>
      <div className={''}>
        <Image className={'border-primary-dark border-4 rounded-md'} src={data.images && data.images.length !== 0 ? data.images[0] : '/imgs/img-placeholder.svg'} alt={data.name ? data.name : ''} width={200} height={100} />
      </div>
      <div className={'grow'}>
        <Title level={3} className={'mb-[0px]'}>{data.name}</Title>
        {/*<Typography className={'text-sm mb-[18px] leading-[1.4rem]'}>{data.description}</Typography>*/}
        <Typography className={'text-sm mb-[8px] leading-[1.3rem] !text-primary-dark'}>Уровень владения</Typography>
        <Rate value={Number(data.grade)} className={'mb-[24px]'} />
        <div className={'flex gap-2 flex-wrap'}>
          {data.technologies?.map((tech) => (
            <Tag key={tech.id}>{tech.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologyBlock;