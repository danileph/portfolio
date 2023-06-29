'use client'
import {FC, useRef, useState} from 'react';
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import {LARGE, MEDIUM, SMALL} from "@/lib/consts/breakpoints";
import useViewport from "@/hooks/useViewport";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import PropTypes from "prop-types";

interface ICarouselProps extends React.HTMLAttributes<HTMLElement> {
  images: {src: string, alt: string}[];
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


  return (
    <div className={`relative ${className}`} {...other}>
      {veiewport !== 'small' && (
        <>
          <div className={'absolute bottom-0 top-0 z-10 pb-[59px] flex flex-col items-center justify-center pl-2'}>
            <button onClick={slidePrev} className={'rounded-full'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
              <Image src={'/imgs/arrow-2.svg'} alt={'arrow'} width={30} height={30} />
            </button>
          </div>
          <div className={'absolute right-0 bottom-0 top-0 z-10 pb-[59px] flex flex-col items-center justify-center pr-2'}>
            <button onClick={slideNext} className={'rounded-full'} style={{boxShadow: '0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2)'}}>
              <Image src={'/imgs/arrow-2.svg'} alt={'arrow'} width={30} height={30} className={'rotate-180'} />
            </button>
          </div>
        </>
      )}
      <AliceCarousel
        items={images.map((img) => (
          <img src={img.src} alt={img.alt} key={img.src} onDragStart={handleDragStart} role="presentation"/>
        ))}
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
