import { FC } from "react";
import { cn } from "@/lib/utils";

interface IWrapperProps extends React.HTMLAttributes<HTMLElement> {}

const Wrapper: FC<IWrapperProps> = ({ className, ...other }) => {
  return (
    <div
      className={cn("max-w-[1400px] mx-auto lg:px-24 md:px-12 px-6", className)}
      {...other}
    />
  );
};

export default Wrapper;
