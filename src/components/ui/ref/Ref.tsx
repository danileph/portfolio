import { FC } from 'react';
import Link from "next/link";

interface IRefProps extends React.HTMLAttributes<HTMLElement> {
  href: string
};

const Ref: FC<IRefProps> = ({className, ...other}) => {
  return (
    <Link className={`font-semibold text-sm tracking-wide before:content-[""] before:inline-block before:h-[10px] before:w-[10px] before:bg-no-repeat before:bg-contain before:bg-center before:mr-2 before:bg-chain hover:text-primary before:hover:bg-chain-ac cursor-pointer ${className}`} {...other} />
  )
}

export default Ref;
