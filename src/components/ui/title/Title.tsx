import React, {FC, forwardRef} from "react";

interface ITitleProps extends React.HTMLAttributes<HTMLHeadingElement>, React.RefAttributes<HTMLElement> {
  level?: 1 | 2 | 3;
}

// eslint-disable-next-line react/display-name
const Title = forwardRef<HTMLHeadingElement, ITitleProps>(({ level = 1, className, ...other}, ref) => {
  let RenderNode: FC<Omit<ITitleProps, "level" | 'ref'>> = () => <></>;

  switch (level) {
    case 1:
      // eslint-disable-next-line react/display-name
      RenderNode = (props) => (
        <h1
          className={`lg:text-7xl md:text-6xl text-4xl font-thin uppercase tracking-widest ${className}`}
          ref={ref}
          {...props}
        />
      );
      break;
    case 2:
      // eslint-disable-next-line react/display-name
      RenderNode = (props) => (
        <h2
          className={`md:text-4xl text-3xl lg:text-start text-center uppercase tracking-wide leading-[3rem] mb-[60px] after:content-[""] inline-block relative after:absolute after:block after:h-[4px] after:bottom-[-30px] after:rght-0 after:bg-primary-dark after:w-full ${className}`}
          ref={ref}
          {...props}
        />
      );
      break;
    case 3:
      // eslint-disable-next-line react/display-name
      RenderNode = (props) => (
        <h3
          className={`text-xl ${className}`}
          ref={ref}
          {...props}
        />
      );
      break;
  }

  return <RenderNode {...other} />;
})

export default Title;