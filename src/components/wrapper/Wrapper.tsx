import { FC } from 'react';

interface IWrapperProps extends React.HTMLAttributes<HTMLElement> {};

const Wrapper: FC<IWrapperProps> = ({ className, ...other}) => {
  return (
    <div className={`max-w-[1400px] mx-auto lg:px-24 md:px-12 px-6 ${className}`} {...other} />
  )
}

export default Wrapper;
