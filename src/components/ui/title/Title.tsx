import React, {FC, forwardRef} from "react";

interface ITitleProps extends React.HTMLAttributes<HTMLHeadingElement>, React.RefAttributes<HTMLElement> {
  level?: 1 | 2 | 3;
}

const Title = forwardRef<HTMLHeadingElement, ITitleProps>(({ level = 1, className, ...other}, ref) => {
  let RenderNode: FC<Omit<ITitleProps, "level" | 'ref'>> = () => <></>;

  switch (level) {
    case 1:
      RenderNode = (props) => (
        <h1
          className={`text-7xl font-thin uppercase tracking-widest ${className}`}
          ref={ref}
          {...props}
        />
      );
      break;
    case 2:
      RenderNode = (props) => (
        <h2
          className={`text-4xl uppercase tracking-wide leading-[3rem] mb-[80px] after:content-[""] inline-block relative after:absolute after:block after:h-[4px] after:bottom-[-40px] after:rght-0 after:bg-primary-dark after:w-full ${className}`}
          ref={ref}
          {...props}
        />
      );
      break;
    case 3:
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