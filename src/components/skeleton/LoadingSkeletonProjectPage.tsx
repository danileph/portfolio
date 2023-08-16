'use client'
import { FC } from 'react';
import {Wrapper} from "@/components/wrapper";
import {Author} from "@/app/projects/[projectId]/author";
import {Title} from "@/components/ui/title";
import Skeleton from "@/components/skeleton/Skeleton";
import Typography from "@/components/ui/typography/Typography";

interface ILoadingSkeletonProjectPageProps {};

const LoadingSkeletonProjectPage: FC<ILoadingSkeletonProjectPageProps> = () => {
  return (
    <main className="min-h-screen pt-[70px]">
      <Wrapper>
        <Author />
        <Title className={'font-inter text-center md:my-24 my-16'}><Skeleton className={'max-w-[608px]'} /></Title>
      </Wrapper>
      <div className={'my-16'}>
        <Skeleton className={'h-[300px]'} />
      </div>
      <Wrapper className={'max-w-[800px] pb-[80px]'}>
        <Title level={3} className={'!mb-6'}><Skeleton className={'max-w-[250px]'} /></Title>
        <Typography><Skeleton count={12} /></Typography>
        <Title level={3} className={'!mb-6'}><Skeleton className={'max-w-[250px]'} /></Title>
        <Typography><Skeleton count={12} /></Typography>
        <Title level={3} className={'!mb-6'}><Skeleton className={'max-w-[250px]'} /></Title>
        <div className={'flex flex-wrap -mt-2 mb-6'}>
          <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
          <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
          <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
        </div>
      </Wrapper>
    </main>
  )
}

export default LoadingSkeletonProjectPage;
