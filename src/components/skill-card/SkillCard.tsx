import { FC, forwardRef } from "react";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/tag";

interface ISkillCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  image: React.ReactElement;
  primary?: boolean;
}

const SkillCard = forwardRef<HTMLDivElement, ISkillCardProps>(
  ({ title, primary, image, className, children, ...props }, ref) => {
    return (
      <section
        className={cn(
          "px-14 py-24 bg-my-natural-760 border-my-natural-720 border-2 text-center shadow-page relative rounded-my-rounded",
          primary && "scale-110 brightness-100 z-20",
          !primary && "brightness-95",
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "flex flex-col items-center",
            !primary && "brightness-75"
          )}
        >
          {primary && (
            <Tag className={"absolute z-30 top-6 right-6"}>Больше опыта</Tag>
          )}
          <div className={"mb-4"}>{image}</div>
          <Title level={3} className={cn("text-my-natural-100")}>
            {title}
          </Title>
          {children}
        </div>
      </section>
    );
  }
);
SkillCard.displayName = "SkillCard";

export { SkillCard };
