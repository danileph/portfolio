'use client'
import {IExperience} from "@/models/IExperience";
import {FC, useState} from "react";
import Typography from "@/components/ui/typography/Typography";
import {DATE_FORMAT} from "@/lib/consts/date-format";
import {Title} from "@/components/ui/title";
import {Ref} from "@/components/ui/ref";
import {Tag} from "@/components/ui/tag";
import {ITechnology} from "@/models/ITechnology";
import {Rate} from "../ui/rate";
import {useRouter} from "next/navigation";
import useViewport from "@/hooks/useViewport";
import Image from "@/components/content-viewer/Image";

interface ITechnologyBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ITechnology
};


const TechnologyBlock: FC<ITechnologyBlockProps> = ({data}) => {
  const router = useRouter();
  const [mouseOvered, setMouseOvered] = useState(false);
  const viewport = useViewport();

  const onProjectClick = () => {
    window.open(data.ref, '_blank');
  }


  return (
    <div onClick={['large'].includes(viewport) ? onProjectClick : undefined} onMouseOver={() =>  setMouseOvered(true)} onMouseLeave={() => setMouseOvered(false)} className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg lg:cursor-pointer lg:hover:shadow-md lg:hover:bg-secondary'}>
      <div className={''}>
        <Image skeletonClassName={'h-[100px]'} className={`md:block md:w-auto md:h-auto w-[200px] inline-block items-stretch border-[3px] rounded-md ${mouseOvered ? 'border-primary-light' : 'border-primary-dark'}`} src={data?.images ? data?.images[0] : undefined} alt={data.name ? data.name : ''} />
      </div>
      <div className={'grow'}>
        <Title onClick={!['large'].includes(viewport) ? onProjectClick : undefined} level={3} className={`mb-[10px] after:content-[""] after:inline-block after:h-[10px] after:w-[10px] after:bg-no-repeat after:bg-contain after:bg-center after:ml-2 cursor-pointer ${mouseOvered && ['large'].includes(viewport) ? 'after:bg-arrow-3-ac text-primary after:translate-x-[5px] after:translate-y-[-5px]' : 'after:bg-arrow-3 after:hover:bg-arrow-3-ac hover:text-primary after:hover:translate-x-[5px] after:hover:translate-y-[-5px]'}`}>{data.name}</Title>
        {/*<Typography className={'text-sm mb-[18px] leading-[1.4rem]'}>{data.description}</Typography>*/}
        <Typography className={'text-sm mb-[8px] leading-[1.3rem] !text-primary-dark'}>Уровень владения</Typography>
        <Rate value={Number(data.grade)} className={'mb-[calc(24px-0.5rem)]'} />
        <div className={'flex flex-wrap'}>
          {data.technologies?.map((tech) => (
            <Tag key={tech.id} className={'mt-2 mr-2'}>{tech.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnologyBlock;