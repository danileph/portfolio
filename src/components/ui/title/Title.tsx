import React, { FC, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ITitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    React.RefAttributes<HTMLElement> {
  level?: 1 | 2 | 3;
}

// eslint-disable-next-line react/display-name
const Title = forwardRef<HTMLHeadingElement, ITitleProps>(
  ({ level = 1, className, ...other }, ref) => {
    let RenderNode: FC<Omit<ITitleProps, "level" | "ref">> = () => <></>;

    switch (level) {
      case 1:
        // eslint-disable-next-line react/display-name
        RenderNode = (props) => (
          <h1
            className={cn(
              "lg:text-6xl md:text-6xl text-3xl text-my-natural-100 mb-6 md:mb-10 font-furore",
              className
            )}
            ref={ref}
            {...props}
          />
        );
        break;
      case 2:
        // eslint-disable-next-line react/display-name
        RenderNode = (props) => (
          <h2
            className={cn(
              "font-semibold text-3xl md:text-4xl mb-12 text-my-natural-100",
              className
            )}
            ref={ref}
            {...props}
          />
        );
        break;
      case 3:
        // eslint-disable-next-line react/display-name
        RenderNode = (props) => (
          <h3
            className={cn(
              " text-xl md:text-2xl font-semibold mb-8 text-my-natural-100",
              className
            )}
            ref={ref}
            {...props}
          />
        );
        break;
    }

    return <RenderNode {...other} />;
  }
);

export default Title;
