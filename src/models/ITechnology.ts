export interface ITechnology {
  id?: string;
  name?: string;
  type?: string;
  grade?: string;
  technologies?: ITechnology[];
  images?: string[];
  ref?: string;
}