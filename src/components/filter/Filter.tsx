"use client";
import { FC, forwardRef, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Filter as FilterLucid, ListFilter } from "lucide-react";
import { FilterItem } from "@/components/filter/FilterItem";

type IFilterItem = {
  key: string;
  label: string;
};

type IFlattenedFilterItem = IFilterItem & {
  amount: number;
};

interface IFilterProps extends React.HTMLAttributes<HTMLElement> {
  filterItems: IFilterItem[] | undefined;
  onFilterChange?: (selectedFilter: IFlattenedFilterItem, all: number) => void;
}

const Filter: FC<IFilterProps> = forwardRef<HTMLDivElement, IFilterProps>(
  ({ className, filterItems, onFilterChange = () => {}, ...props }, ref) => {
    const allFilterItem: IFlattenedFilterItem = {
      key: "all",
      label: "Все",
      amount: filterItems?.length ?? 0,
    };
    const [flattenedFilterItems, setFlattenedFilterItems] = useState<
      IFlattenedFilterItem[]
    >([]);
    const [selectedFilter, setSelectedFilter] =
      useState<IFlattenedFilterItem>(allFilterItem);

    useEffect(() => {
      if (filterItems) {
        const _flattenedFilterItems = filterItems.reduce<
          IFlattenedFilterItem[]
        >(
          (acc, currentValue) => {
            const foundAccIndex = acc.findIndex(
              (accValue) => accValue.key === currentValue.key
            );

            if (foundAccIndex !== -1) {
              acc[foundAccIndex].amount += 1;
            } else {
              acc.push({ ...currentValue, amount: 1 });
            }

            return acc;
          },
          [allFilterItem]
        );
        setFlattenedFilterItems(_flattenedFilterItems);
      }
    }, [filterItems]);

    const onClick = (flattenedFilterItem: IFlattenedFilterItem) => {
      onFilterChange(flattenedFilterItem, filterItems?.length ?? 0);
      setSelectedFilter(flattenedFilterItem);
    };

    return (
      <div ref={ref} className={cn("flex items-center", className)}>
        <ListFilter className={"ml-2 h-5 w-5 mr-4"} />
        {flattenedFilterItems.map((flattenedFilterItem) => (
          <FilterItem
            key={flattenedFilterItem.key}
            onClick={() => onClick(flattenedFilterItem)}
            amount={flattenedFilterItem.amount}
            selected={selectedFilter.key === flattenedFilterItem.key}
          >
            {flattenedFilterItem.label}
          </FilterItem>
        ))}
      </div>
    );
  }
);
Filter.displayName = "Filter";

export { Filter };
export type { IFilterItem, IFlattenedFilterItem };
