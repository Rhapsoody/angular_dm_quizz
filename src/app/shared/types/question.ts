import {Answer} from "./answer";

export interface Question {
  id: number;
  label: string;
  answers: Array<Answer>;
}
