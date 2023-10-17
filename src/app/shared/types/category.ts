import {Question} from "./question";

export interface Category {
  id: number;
  label: string;
  questions?: Array<Question>;
}
