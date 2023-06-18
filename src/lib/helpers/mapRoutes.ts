import {IRoute} from "@/types/IRoute";
import {IProject} from "@/models/IProject";
import {ITechnology} from "@/models/ITechnology";

export const mapRoutes = (data: IProject[] | ITechnology[]): IRoute[] => {
  const sections: IRoute[] = [];

  data?.forEach((entry) => {
    if (!sections.find(elem => elem.src === entry.type)) {
      sections.push({
        name: entry.type ? entry.type : 'Other',
        src: entry.type ? entry.type : 'Other',
      })
    }
  })

  return sections;
}