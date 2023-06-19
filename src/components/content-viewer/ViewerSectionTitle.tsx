import { FC } from 'react';

interface IViewerSectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {};

const ViewerSectionTitle: FC<IViewerSectionTitleProps> = ({ className, ...other}) => {
  return (
    <h3 className={`text-center text-xl mb-[60px] ${className}`} {...other} />
  )
}

export default ViewerSectionTitle;
