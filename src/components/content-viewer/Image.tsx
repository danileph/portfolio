import {FC, Suspense, useEffect, useState} from 'react';
import {default as ImageNext, ImageLoader} from 'next/image';
import Skeleton from "@/components/skeleton/Skeleton";

interface IImageProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  src: string;
  alt: string;
  loading?: "eager" | "lazy" | undefined;
  skeletonClassName?: string;
};

const Image: FC<IImageProps> = ({skeletonClassName, src, alt, className, ...other}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      setIsLoaded(true)
    }
  }, [src])

  const imageLoader: ImageLoader = ({src}) => {
    return src;
  }

  return (
    <div className={`relative ${className}`}>
      <img onLoad={() => setIsLoaded(true)} className={`${isLoaded ? 'visible' : 'invisible absolute'}`} src={src} alt={alt} placeholder={'/imgs/img-placeholder.svg'} {...other}/>
      {!isLoaded && <Skeleton className={`block w-full ${skeletonClassName}`} containerClassName={'flex'}/>}
    </div>
  )
}

export default Image;
