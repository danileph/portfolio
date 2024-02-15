import { ITechnology } from "@/models/ITechnology";
import { IProject } from "@/models/IProject";
import { Dayjs } from "dayjs";

export interface IExperience {
  id?: string;
  company?: string;
  images?: string[];
  city?: string;
  site?: string;
  position?: string;
  achievements?: string;
  technologies?: ITechnology[];
  projects?: IProject[];
  period?: {
    start?: Dayjs;
    end?: Dayjs;
  };
}
