import { FC } from 'react';

interface ITypographyProps extends React.HTMLAttributes<HTMLParagraphElement>{};

const Typography: FC<ITypographyProps> = ({className, ...other}) => {
  return (
    <p className={`mb-6 leading-6 text-white-secondary tracking-wide ${className}`} {...other}></p>
  )
}

export default Typography;
