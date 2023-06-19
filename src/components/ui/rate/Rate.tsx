import { FC } from 'react';
import Typography from "@/components/ui/typography/Typography";

interface IRateProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  value: number;
};

const Rate: FC<IRateProps> = ({ value, className, ...other}) => {
  const bands: React.ReactElement[] = [];
  for (let i = 1; i <= 10; i++) {
    bands.push(<div className={`grow h-[10px] max-w-[10px] ${i <= value ? 'bg-primary' : 'bg-primary-dark'}`} />)
  }
  return (
      <div className={`flex ${className}`}>
        {bands}
      </div>
  )
}

export default Rate;
