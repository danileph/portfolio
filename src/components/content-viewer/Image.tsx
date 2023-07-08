import {FC, Suspense, useEffect, useState} from 'react';
import {default as ImageNext, ImageLoader} from 'next/image';
import Skeleton from "react-loading-skeleton";

interface IImageProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  src: string;
  alt: string;
};

const Image: FC<IImageProps> = ({src, alt, className}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageLoader: ImageLoader = ({src}) => {
    return src;
  }

  return (
    <div className={`relative md:block md:w-auto md:h-auto w-[200px] inline-block  items-stretch ${className}`}>
      <ImageNext onLoad={() => setIsLoaded(true)} className={`${isLoaded ? 'visible' : 'invisible absolute'}`} src={src} alt={alt} loader={imageLoader} width={200} height={100} loading={'lazy'}/>
      {!isLoaded && <Skeleton className={'block w-full h-[100px]'} containerClassName={'flex'}/>}
    </div>
  )
}

export default Image;
