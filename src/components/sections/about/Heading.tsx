import { FC } from 'react';
import {Wrapper} from "@/components/wrapper";
import {Title} from "@/components/ui/title";

interface IHeadingProps {};

const Heading: FC<IHeadingProps> = () => {
  return (
    <div className={'bg-ellipse-background-header h-[30vh] bg-no-repeat bg-top bg-cover relative z-10 font-inter'}>
      <Wrapper className={'flex flex-col gap-4 justify-center items-center h-full'}>
          <Title className={'text-center'}>Danil Efremov</Title>
          <h2 className={'uppercase text-sm tracking-[.35em] font-bold'}>Full-stack web developer</h2>
      </Wrapper>
    </div>
  )
}

export default Heading;
