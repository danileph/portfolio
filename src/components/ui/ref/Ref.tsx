import { FC } from 'react';

interface IRefProps extends React.HTMLAttributes<HTMLElement> {};

const Ref: FC<IRefProps> = ({className, ...other}) => {
  return (
    <a className={`font-semibold text-sm tracking-wide ${className}`} {...other}></a>
  )
}

export default Ref;
