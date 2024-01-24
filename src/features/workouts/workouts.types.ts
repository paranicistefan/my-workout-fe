import { IProgram, ISet } from "../programs/programs.interfaces";

export interface IWorkoutSet extends Omit<ISet, "id"> {}

export interface IWorkoutExercise {
  name: string;
  sets: IWorkoutSet[];
}
export interface IWorkoutRes {
  programName: string;
  exercises: IWorkoutExercise[];
}

export interface IWorkout {
  id: string;
  createdAt: Date;
  program: IProgram;
  sets: IWorkoutSet[];
  isArcived: boolean;
}
