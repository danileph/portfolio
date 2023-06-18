import { FC } from 'react';

interface IWrapperProps extends React.HTMLAttributes<HTMLElement> {};

const Wrapper: FC<IWrapperProps> = ({ className, ...other}) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-24 ${className}`} {...other} />
  )
}

export default Wrapper;
