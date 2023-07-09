'use client'
import {FC, useRef, useState} from 'react';
import AliceCarousel from "react-alice-carousel";
import {default as ImageNext} from 'next/image'
import {LARGE, MEDIUM, SMALL} from "@/lib/consts/breakpoints";
import useViewport from "@/hooks/useViewport";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import PropTypes from "prop-types";
import Image from "@/components/content-viewer/Image";
import Skeleton from "@/components/skeleton/Skeleton";

interface ICarouselProps extends React.HTMLAttributes<HTMLElement> {
  images?: {src: string, alt: string}[];
};

const Carousel: FC<ICarouselProps> = ({className, images, ...other}) => {
  const handleDragStart = (e: any) => e.preventDefault();
  const {width} = useWindowDimensions();
  const veiewport = useViewport();
  const refCarousel = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    if (refCarousel && refCarousel.current) {
      // @ts-ignore
      refCarousel.current.slidePrev()
    }
  };

  const slideNext = () => {
    if (refCarousel && refCarousel.current) {
      // @ts-ignore
      refCarousel.current.slideNext()
    }
  };

  let items: any[] = [];
  if (images) {
    items =  images.map((img) => (
      <Image skeletonClassName={'h-[250px]'} src={img.src} alt={img.alt} key={img.src} onDragStart={handleDragStart} role="presentation"/>
    ))
  } else {
    items = [
      <div className={`relative ${className}`} key={'one-sk'}>
        <Skeleton className={`block w-full h-[250px]`} containerClassName={'flex'}/>
      </div>,
      <div className={`relative ${className}`} key={'two-sk'}>
        <Skeleton className={`block w-full h-[250px]`} containerClassName={'flex'}/>
      </div>,
      <div className={`relative ${className}`} key={'tree-sk'}>
        <Skeleton className={`block w-full h-[250px]`} containerClassName={'flex'}/>
      </div>
    ]
  }


  return (
    <div className={`relative ${className}`} {...other}>
      {veiewport !== 'small' && (
        <>
          <div className={'absolute bottom-0 top-0 z-10 pb-[59px] flex flex-col items-center justify-center pl-2'}>
            <button onClick={slidePrev} className={'rounded-full'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
              <ImageNext src={'/imgs/arrow-2.svg'} alt={'arrow'} width={30} height={30} />
            </button>
          </div>
          <div className={'absolute right-0 bottom-0 top-0 z-10 pb-[59px] flex flex-col items-center justify-center pr-2'}>
            <button onClick={slideNext} className={'rounded-full'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
              <ImageNext src={'/imgs/arrow-2.svg'} alt={'arrow'} width={30} height={30} className={'rotate-180'} />
            </button>
          </div>
        </>
      )}
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={8000}
        infinite
        disableButtonsControls
        keyboardNavigation
        mouseTracking
        responsive={{
          [LARGE]: {
            items: 3,
          },
          [MEDIUM]: {
            items: 2,
          },
          [SMALL]: {
            items: 1,
          }
        }}
        innerWidth={width}
        // activeIndex={activeIndex}
        ref={refCarousel}
      />
    </div>
  )
}

export default Carousel;
