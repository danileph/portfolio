import { FC } from "react";
import { cn } from "@/lib/utils";

interface ITypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const Typography: FC<ITypographyProps> = ({ className, ...other }) => {
  return (
    <p
      className={cn("font-roboto-mono mb-6 font-normal", className)}
      {...other}
    ></p>
  );
};

export default Typography;
