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

export const ProjectCarousel: FC<IProjectCarouselProps> = ({ images }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full my-24"
    >
      <PhotoProvider>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image.src}
              className="md:basis-1/2 lg:basis-1/3 pl-2 cursor-pointer"
            >
              <PhotoView src={image.src}>
                <ImagePlaceholder
                  className={"rounded-lg bg-my-natural-900 brightness-125"}
                >
                  {({ setIsError, setIsLoading, imgStyles }) => (
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
                  )}
                </ImagePlaceholder>
              </PhotoView>
            </CarouselItem>
          ))}
        </CarouselContent>
      </PhotoProvider>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicator />
    </Carousel>
  );
};
