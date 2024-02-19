import { FC } from "react";
import { cn } from "@/lib/utils";

interface IMenuItemProps extends React.HTMLAttributes<HTMLElement> {
  active: boolean;
  number: string;
}

export const MenuItem: FC<IMenuItemProps> = ({
  className,
  children,
  active,
  number,
  ...props
}) => {
  return (
    <a
      className={cn(
        'inline-block cursor-pointer transition group-hover:brightness-50 hover:!filter-none py-3 before:content-["//_"] lowercase relative font-roboto-mono text-my-natural-100 font-semibold',
        active && "text-my-secondary-100",
        className
      )}
      {...props}
    >
      <span className={"absolute top-0 text-2xs right-0 font-normal"}>
        {number}
      </span>
      {children}
    </a>
  );
};
