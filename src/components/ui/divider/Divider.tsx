import { FC } from 'react';

interface IDividerProps extends React.HTMLAttributes<HTMLElement> {};

const Divider: FC<IDividerProps> = ({className, ...other}) => {
  return (
    <hr className={` mb-[50px] bg-secondary h-[2px] border-0 mx-8 ${className}`} {...other}/>
  )
}

export default Divider;
