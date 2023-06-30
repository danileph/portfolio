import { FC } from 'react';
import Link from 'next/link';

interface IAuthorProps extends React.HTMLAttributes<HTMLElement> {};

const Author: FC<IAuthorProps> = ({className, ...other}) => {
  return (
    <div className={`${className}`} {...other}>
      <h1 className={'text-center !font-inter text-2xl uppercase font-thin tracking-[0.3rem]'}><Link href={'/'}>Danil Efremov</Link></h1>
      <h2 className={'text-center !font-inter text-md uppercase text-primary-dark tracking-[0.2rem] font-bold'}>Full-stack web developer</h2>
    </div>
  )
}

export default Author;
