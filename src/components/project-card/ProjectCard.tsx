"use client";
import { FC, useRef, useState } from "react";
import { Title } from "@/components/ui/title";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/skeleton/Skeleton";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/image-placeholder/ImagePlaceholder";

interface IProjectCardProps extends React.HTMLAttributes<HTMLElement> {
  data?: {
    title: string;
    description: string;
    tags: string[];
    previewImg: {
      src: string;
      alt: string;
    };
    href: string;
  };
}

export const ProjectCard: FC<IProjectCardProps> = ({
  className,
  data,
  ...props
}) => {
  const imageBlockMarginBottom = 96;
  const [tagTop, setTagTop] = useState(0);
  const infoPanelRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const imageBlockRef = useRef<HTMLDivElement>(null);

  const onMouseEnterHandler = () => {
    if (infoPanelRef.current && tagRef.current && imageBlockRef.current) {
      const infoPanelHeight = infoPanelRef.current.offsetHeight;
      const tagHeight = tagRef.current.offsetHeight;
      const infoPanelOverlayHeight = infoPanelHeight - imageBlockMarginBottom;
      const imageBlockHeight = imageBlockRef.current.offsetHeight;
      const _tagTop =
        (imageBlockHeight - infoPanelOverlayHeight) / 2 - tagHeight / 2;
      setTagTop(_tagTop);

      console.log({
        infoPanelHeight,
        tagHeight,
        imageBlockOffsetHeight: infoPanelHeight - imageBlockMarginBottom,
      });
    }
  };

  let RootElem:
    | FC<React.ComponentPropsWithoutRef<typeof Link>>
    | FC<React.HTMLAttributes<HTMLDivElement>>;
  if (data) {
    RootElem = Link;
  } else {
    const Div: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
      <div {...props} />
    );
    RootElem = Div;
  }

  return (
    <RootElem
      className={cn(
        "block relative group",
        data && "cursor-pointer",
        className
      )}
      onMouseEnter={onMouseEnterHandler}
      href={data?.href ?? ""}
      {...props}
    >
      <div
        className={`mb-[96px] overflow-hidden relative rounded-t-my-rounded`}
        ref={imageBlockRef}
      >
        {data ? (
          <ImagePlaceholder className={"rounded-b-none rounded-t-my-rounded"}>
            {({ isError, isLoading, setIsError, setIsLoading, imgStyles }) => (
              <img
                className={cn(
                  "w-full transition ",
                  data && "group-hover:brightness-50 group-hover:scale-110",
                  imgStyles
                )}
                src={data.previewImg.src}
                alt={data.previewImg.alt}
                width={1000}
                height={1000}
                onLoad={() => setIsLoading(false)}
                onEnded={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setIsError(true);
                }}
              />
            )}
          </ImagePlaceholder>
        ) : (
          <Skeleton
            image
            className={"w-full rounded-b-none rounded-t-my-rounded"}
          />
        )}
        {data && (
          <div
            ref={tagRef}
            className={
              "absolute hidden lg:group-hover:flex items-center left-1/2 top-1/2 -translate-x-1/2 bg-[#242629]/40 text-my-natural-300/70 py-2 px-4 font-normal text-xs rounded-full"
            }
            style={{
              top: tagTop,
            }}
          >
            <ExternalLink className={"h-3.5 w-3.5 mr-2"} />
            Подробнее
          </div>
        )}
      </div>
      <div
        className={
          "bg-[#242629] py-6 px-8 absolute bottom-0 w-full transition rounded-b-my-rounded"
        }
        ref={infoPanelRef}
      >
        <p
          className={
            "font-semibold text-xl truncate group-hover:whitespace-normal text-my-natural-100 transition"
          }
        >
          {data ? data.title : <Skeleton className={"w-[160px]"} />}
        </p>
        <p
          className={
            "font-normal text-sm truncate group-hover:whitespace-normal font-roboto-mono transition"
          }
        >
          {data ? data.description : <Skeleton className={"w-[90px]"} />}
        </p>
      </div>
    </RootElem>
  );
};
