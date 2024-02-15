import { ISphere } from "@/models/ISphere";

export interface ITechnology {
  id?: string;
  name?: string;
  type?: string;
  grade?: string;
  technologies?: ITechnology[];
  spheres?: ISphere[];
  images?: string[];
  ref?: string;
}
