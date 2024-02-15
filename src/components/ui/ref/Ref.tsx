import { FC } from "react";
import Link from "next/link";
import { Link as LinkLucid } from "lucide-react";
import { cn } from "@/lib/utils";

interface IRefProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
}

const Ref: FC<IRefProps> = ({ className, children, ...other }) => {
  return (
    <Link
      className={cn(
        "font-medium text-sm tracking-wide hover:text-my-secondary-100 cursor-pointer inline-flex items-center",
        className
      )}
      {...other}
    >
      <LinkLucid className={"w-3 h-3 mr-1.5"} />
      {children}
    </Link>
  );
};

export default Ref;
