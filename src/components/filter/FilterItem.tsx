import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addZeroToNumber } from "@/lib/helpers/addZeroToNumber";

interface IFilterItemProps extends React.HTMLAttributes<HTMLElement> {
  amount: number;
  selected: boolean;
}

export const FilterItem: FC<IFilterItemProps> = ({
  children,
  amount,
  className,
  selected = false,
  ...props
}) => {
  return (
    <>
      <Button
        variant={"link"}
        className={cn(
          "relative p-0 mr-4 last:mr-0 transition font-semibold h-[50px]",
          selected && "text-my-secondary-100"
        )}
        {...props}
      >
        <span className={"text-2xs absolute top-0 -right-2"}>
          {addZeroToNumber(amount)}
        </span>
        {children}
      </Button>
      <span className={"last:hidden mr-4"}>/</span>
    </>
  );
};
