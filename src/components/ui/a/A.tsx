import { FC } from 'react';

interface IAProps extends React.HTMLAttributes<HTMLAnchorElement>{};

const A: FC<IAProps> = ({className, ...other}) => {
  return (
    <a className={`cursor-pointer inline-block text-primary relative after:content-[""] after:h-[4px] after:w-full after:block after:hover:bg-primary after:absolute after:bottom-[-4px] ${className}`} {...other}/>
  )
}

export default A;
