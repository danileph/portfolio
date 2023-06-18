import {ITechnology} from "@/models/ITechnology";

export interface IProject {
  id?: string;
  name?: string;
  description?: string;
  content?: string;
  images?: string[];
  myTechnologies?: ITechnology[];
  otherTechnologies?: ITechnology[];
  type?: string;
}