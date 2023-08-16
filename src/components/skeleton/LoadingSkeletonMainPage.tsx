'use client'
import { FC } from 'react';
import {Section} from "@/components/section";
import Heading from "@/components/sections/about/Heading";
import {Wrapper} from "@/components/wrapper";
import Skeleton from "@/components/skeleton/Skeleton";
import {Title} from "@/components/ui/title";
import Typography from "@/components/ui/typography/Typography";
import RootProvider from "@/components/root-provider/RootProvider";

interface ILoadingSkeletonMainPageProps {};

const LoadingSkeletonMainPage: FC<ILoadingSkeletonMainPageProps> = () => {
  return (
    <RootProvider>
      <main className="min-h-screen">

        {/*О себе*/}
        <Section name={'about'} className={'pt-[50px] lg:pb-[48px] flex flex-col relative'}>
          {/*<Particles className={'absolute top-0 bottom-0 grow blur-[1px]'} id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions} />*/}
          <Heading />
          <Wrapper className={'pt-14 pb-10 flex flex-col justify-center items-center relative z-10'}>
            {/*<Image src={'/imgs/avatar.png'} alt={'avatar'} width={150} height={150} loading={"lazy"}/>*/}
            <Skeleton circle className={'w-[150px] h-[150px]'} />
            <article className={'box-border bg-secondary-dark-tr rounded-lg sm:px-10 py-10 max-w-[550px]'}>
              <Skeleton count={14} className={'sm:w-[400px] w-[calc(100vw-48px)]'} />
            </article>
          </Wrapper>
        </Section>

        {/*Опыт работы*/}
        <Section name={'experience'} className={'lg:py-32 py-20'}>
          <Wrapper className={'lg:grid grid-cols-[minmax(200px,350px)_1fr] md:block gap-36 w-full'}>
            <section className={'relative'}>
              <div className={'sticky top-[90px]'}>
                <div className={'flex justify-center lg:justify-start'}>
                  <Title level={2} className={'inline-block'}>Опыт работы</Title>
                </div>
                <Typography className={'mb-[60px] lg:text-start text-center'}><Skeleton count={5} /></Typography>
              </div>
            </section>
            <section className={'flex flex-col lg:space-y-0 space-y-[60px]'}>
              <div className={'md:grid sm:block grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] gap-8 lg:p-8 rounded-lg'}>
                <div className={''}>
                  <Typography className={'text-xs !mb-0'}><Skeleton className={'max-w-[120px]'} /></Typography>
                </div>
                <div className={'grow'}>
                  <Title level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <Typography className={'!text-primary-dark text-lg mb-[10px]'}><Skeleton className={'max-w-[200px]'} /></Typography>
                  <Typography className={'text-sm mb-[calc(14px-0.5rem)] leading-[1.3rem]'}><Skeleton count={5} /></Typography>
                  <div className={'flex flex-wrap mb-[calc(18px-0.5rem)]'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
              <div className={'md:grid sm:block grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] gap-8 lg:p-8 rounded-lg'}>
                <div className={''}>
                  <Typography className={'text-xs !mb-0'}><Skeleton className={'max-w-[120px]'}/></Typography>
                </div>
                <div className={'grow'}>
                  <Title level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <Typography className={'!text-primary-dark text-lg mb-[10px]'}><Skeleton className={'max-w-[200px]'} /></Typography>
                  <Typography className={'text-sm mb-[calc(14px-0.5rem)] leading-[1.3rem]'}><Skeleton count={5} /></Typography>
                  <div className={'flex flex-wrap mb-[calc(18px-0.5rem)]'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
              <div className={'md:grid sm:block grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] gap-8 lg:p-8 rounded-lg'}>
                <div className={''}>
                  <Typography className={'text-xs !mb-0'}><Skeleton className={'max-w-[120px]'}/></Typography>
                </div>
                <div className={'grow'}>
                  <Title level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <Typography className={'!text-primary-dark text-lg mb-[10px]'}><Skeleton className={'max-w-[200px]'} /></Typography>
                  <Typography className={'text-sm mb-[calc(14px-0.5rem)] leading-[1.3rem]'}><Skeleton count={5} /></Typography>
                  <div className={'flex flex-wrap mb-[calc(18px-0.5rem)]'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
            </section>
          </Wrapper>
        </Section>

        {/*Проекты*/}
        <Section name={'projects'} className={'lg:py-32 py-20'}>
          <Wrapper className={'lg:grid grid-cols-[minmax(200px,350px)_1fr] md:block gap-36 w-full'}>
            <section className={'relative'}>
              <div className={'sticky top-[90px]'}>
                <div className={'flex justify-center lg:justify-start'}>
                  <Title level={2} className={'inline-block'}>Проекты</Title>
                </div>
                <Typography className={'mb-[60px] lg:text-start text-center'}><Skeleton count={5} /></Typography>
              </div>
            </section>
            <section className={'flex flex-col lg:space-y-0 space-y-[60px]'}>
              <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg'}>
                <div>
                  <div className={`border-[3px] border-primary-dark rounded-md relative md:block md:w-auto md:h-auto w-[200px] inline-block items-stretch`}>
                    <Skeleton className={'block w-full h-[100px]'} containerClassName={'flex'}/>
                  </div>
                </div>
                <div className={'grow'}>
                  <Title className={`mb-[10px]`} level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <Typography className={'text-sm mb-[calc(18px-0.5rem)] leading-[1.3rem]'}><Skeleton count={5} /></Typography>
                  <div className={'flex flex-wrap'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
              <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg'}>
                <div>
                  <div className={`border-[3px] border-primary-dark rounded-md relative md:block md:w-auto md:h-auto w-[200px] inline-block items-stretch`}>
                    <Skeleton className={'block w-full h-[100px]'} containerClassName={'flex'}/>
                  </div>
                </div>
                <div className={'grow'}>
                  <Title className={`mb-[10px]`} level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <Typography className={'text-sm mb-[calc(18px-0.5rem)] leading-[1.3rem]'}><Skeleton count={5} /></Typography>
                  <div className={'flex flex-wrap'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
              <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg'}>
                <div>
                  <div className={`border-[3px] border-primary-dark rounded-md relative md:block md:w-auto md:h-auto w-[200px] inline-block items-stretch`}>
                    <Skeleton className={'block w-full h-[100px]'} containerClassName={'flex'}/>
                  </div>
                </div>
                <div className={'grow'}>
                  <Title className={`mb-[10px]`} level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <Typography className={'text-sm mb-[calc(18px-0.5rem)] leading-[1.3rem]'}><Skeleton count={5} /></Typography>
                  <div className={'flex flex-wrap'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
            </section>
          </Wrapper>
        </Section>

        {/*Технологии*/}
        <Section name={'tech-stack'} className={'lg:py-32 py-20'}>
          <Wrapper className={'lg:grid grid-cols-[minmax(200px,350px)_1fr] md:block gap-36 w-full'}>
            <section className={'relative'}>
              <div className={'sticky top-[90px]'}>
                <div className={'flex justify-center lg:justify-start'}>
                  <Title level={2} className={'inline-block'}>Стек технологий</Title>
                </div>
                <Typography className={'mb-[60px] lg:text-start text-center'}><Skeleton count={5} /></Typography>
              </div>
            </section>
            <section className={'flex flex-col lg:space-y-0 space-y-[60px]'}>
              <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg'}>
                <div>
                  <Typography className={`mb-[calc(24px-0.5rem)]`}>
                    <Skeleton className={'max-w-[200px]'} />
                  </Typography>
                </div>
                <div className={'grow'}>
                  <Title className={`mb-[10px]`} level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <div className={'flex flex-wrap'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
              <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg'}>
                <div>
                  <Typography className={`mb-[calc(24px-0.5rem)]`}>
                    <Skeleton className={'max-w-[200px]'} />
                  </Typography>
                </div>
                <div className={'grow'}>
                  <Title className={`mb-[10px]`} level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <div className={'flex flex-wrap'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
              <div className={'md:grid flex flex-col-reverse grid-cols-[minmax(100px,200px)_minmax(300px,1fr)] md:gap-8 md:space-y-0 space-y-reverse space-y-6 lg:p-8 rounded-lg'}>
                <div>
                  <Typography className={`mb-[calc(24px-0.5rem)]`}>
                    <Skeleton className={'max-w-[200px]'} />
                  </Typography>
                </div>
                <div className={'grow'}>
                  <Title className={`mb-[10px]`} level={3}><Skeleton className={'max-w-[200px]'} /></Title>
                  <div className={'flex flex-wrap'}>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                    <Typography className={'w-[60px] mt-2 mr-4'}><Skeleton /></Typography>
                  </div>
                </div>
              </div>
            </section>
          </Wrapper>
        </Section>

      </main>
    </RootProvider>
  )
}

export default LoadingSkeletonMainPage;
