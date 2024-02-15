import { FC } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type IAProps = Omit<React.HTMLAttributes<HTMLAnchorElement>, "href"> & {
  external?: boolean;
  href: string;
};

const A: FC<IAProps> = ({ className, external = false, ...other }) => {
  const styles = {
    base: "cursor-pointer inline-block hover:brightness-75 text-sm font-roboto-mono",
  };

  if (external) {
    return <Link className={cn(styles.base, className)} {...other} />;
  }

  return <a className={cn(styles.base, className)} {...other} />;
};

export default A;
