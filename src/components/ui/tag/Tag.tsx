import { FC } from 'react';

interface ITagProps extends React.HTMLAttributes<HTMLElement> {};

const Tag: FC<ITagProps> = ({className, ...other}) => {
  return (
    <span className={`bg-primary-tr text-primary tracking-wide py-[6px] px-[12px] rounded-full text-xs ${className}`} {...other}/>
  )
}

export default Tag;
