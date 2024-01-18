import { IExercise } from "../exercises/exercises.interfaces";

export interface IProgram {
  id: string;
  name: string;
  programExercises: IExercise[];
}
export interface ISet {
  id: string;
  repetitions: number;
  weight: number;
}
