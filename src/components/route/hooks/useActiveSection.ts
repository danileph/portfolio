
import {useEffect, useState} from "react";
import {routes} from "@/lib/consts/routes";
import {IRoute} from "@/types/IRoute";
import {findNearestNumbersToZero} from "@/lib/helpers/findNearestNumbersToZero";

export const useActiveSection = (sectionIds: string[], deps: any[] = []) => {
  const [route, setRoute] = useState<string>();

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;
      const sectionDif: {id: string, dif: number}[] = [];
      sectionIds.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
           sectionDif.push({id: sectionId, dif: middle - top});
        }
      });
      const [leftNearest, rightNearest] = findNearestNumbersToZero(sectionDif.map(item => item.dif));

      setRoute(sectionIds.find(sectionId => sectionId === sectionDif[rightNearest]?.id))
    }
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [...deps])

  return route;
}