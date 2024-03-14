"use client";
import { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ImagePlaceholder } from "@/components/image-placeholder/ImagePlaceholder";
import { cn } from "@/lib/utils";

interface IProjectCarouselProps extends React.HTMLAttributes<HTMLElement> {
  images: { src: string; alt: string }[];
}

export const ProjectCarousel: FC<IProjectCarouselProps> = ({
  images,
  className,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={cn("w-full my-10 md:my-24")}
    >
      <PhotoProvider>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image.src}
              className="md:basis-1/2 xl:basis-1/3 pl-2 cursor-pointer"
            >
              <ImagePlaceholder
                className={"rounded-lg bg-my-natural-900 brightness-125"}
              >
                {({ setIsError, setIsLoading, imgStyles }) => (
                  <PhotoView src={image.src}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      className={cn("rounded-lg", imgStyles)}
                      onLoad={() => {
                        setIsLoading(false);
                        setIsError(false);
                      }}
                      onError={() => {
                        setIsLoading(false);
                        setIsError(true);
                      }}
                    />
                  </PhotoView>
                )}
              </ImagePlaceholder>
            </CarouselItem>
          ))}
        </CarouselContent>
      </PhotoProvider>
      <CarouselPrevious className={"invisible md:visible"} />
      <CarouselNext className={"invisible md:visible"} />
      <CarouselIndicator />
    </Carousel>
  );
};
