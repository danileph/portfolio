"use client";
import { FC, Key } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/Accordion";
import { Tag } from "@/components/ui/tag";
import { Ref } from "@/components/ui/ref";
import { ExternalLink, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/skeleton/Skeleton";
import { ImagePlaceholder } from "@/components/image-placeholder/ImagePlaceholder";

interface IExperienceAccordionItemProps
  extends React.ComponentProps<typeof AccordionItem> {
  data?: {
    company: {
      name: string;
      site: string;
      img: {
        src: string;
        alt: string;
      };
    };
    workingPeriod: string;
    city: string;
    mainContent: string;
    projects: {
      name: string;
      link: string;
    }[];
    technologies: string[];
  };
}

const ExperienceAccordionItem: FC<IExperienceAccordionItemProps> = ({
  data,
  className,
  ...props
}) => {
  return (
    <AccordionItem className={cn("", className)} {...props}>
      <AccordionTrigger
        className={
          "py-8 px-6 bg-[#242629] [data-state=open]:bg-[#2B2E30] text-start rounded-my-rounded justify-between"
        }
      >
        <div className={"w-full flex flex-col md:flex-row md:items-center"}>
          <p className={"md:flex-1 text-my-natural-100"}>
            {data ? data.company.name : <Skeleton className={"w-[100px]"} />}
          </p>
          <p className={"text-xs font-normal mr-8"}>
            {data ? data.workingPeriod : <Skeleton className={"w-[80px]"} />}
          </p>
        </div>
      </AccordionTrigger>
      <AccordionContent
        className={
          "bg-[#1F2123] border-my-natural-720 border-2 p-6 mt-8 mb-3 flex w-full md:items-center rounded-my-rounded flex-col md:flex-row space-y-6 md:space-y-0"
        }
      >
        <div className={"flex-1"}>
          <div className={"flex flex-wrap text-xs mb-2"}>
            <span className={"inline-flex items-center mb-2 mr-4"}>
              <MapPin className={"w-4 h-4 mr-1.5 text-my-primary-500"} />
              {data ? data.city : <Skeleton className={"w-[60px]"} />}
            </span>
            <a
              className={"inline-flex items-center mb-2"}
              href={data ? data.company.name : ""}
            >
              <ExternalLink className={"w-4 h-4 mr-1.5 text-my-primary-500 "} />
              {data ? data.company.site : <Skeleton className={"w-[60px]"} />}
            </a>
          </div>
          <p className={"font-roboto-mono text-normal"}>
            {data
              ? data.mainContent
              : Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton className={"mb-2 last:mb-none"} key={i} />
                ))}
          </p>
          {data ? (
            data.projects.length !== 0 && (
              <div className={"mt-4"}>
                {data.projects.map((project) => (
                  <Ref
                    href={project.link}
                    key={project.name}
                    className={"mr-4 mt-2 text-my-natural-100"}
                  >
                    {project.name}
                  </Ref>
                ))}
              </div>
            )
          ) : (
            <div className={"mt-4"}>
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className={"mr-4 mt-2 text-my-natural-100 w-[130px]"}
                />
              ))}
            </div>
          )}
          {data ? (
            data.technologies.length !== 0 && (
              <div className={"mt-2"}>
                {data.technologies.map((tech) => (
                  <Tag key={tech} className={"mr-2 mt-2"}>
                    {tech}
                  </Tag>
                ))}
              </div>
            )
          ) : (
            <div className={"mt-2"}>
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className={"mr-2 mt-2 w-[80px] rounded-full px-3 py-1"}
                />
              ))}
            </div>
          )}
        </div>
        <div className={"md:ml-6 max-w-[150px]"}>
          {data ? (
            <ImagePlaceholder className={"w-[150px] h-[150px]"} image={false}>
              {({ setIsError, setIsLoading, imgStyles }) => (
                <img
                  src={data.company.img.src}
                  alt={data.company.img.alt}
                  width={150}
                  height={150}
                  className={cn(imgStyles)}
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
          ) : (
            <Skeleton className={"w-[150px] h-[150px]"} />
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

interface IExperienceAccordionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  children: React.ReactNode;
  defaultValue?: string;
  collapsible?: boolean;
}

interface IExperienceAccordionCompound {
  Item: typeof ExperienceAccordionItem;
}

const ExperienceAccordion: FC<IExperienceAccordionProps> &
  IExperienceAccordionCompound = ({
  children,
  defaultValue,
  className,
  collapsible = true,
  ...props
}) => {
  return (
    <Accordion
      type={"single"}
      collapsible={collapsible}
      className={cn("space-y-4", className)}
      defaultValue={defaultValue}
    >
      {children}
    </Accordion>
  );
};

ExperienceAccordion.Item = ExperienceAccordionItem;

export { ExperienceAccordion };
