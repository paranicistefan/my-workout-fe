import { IProgram, ISet } from "../programs/programs.interfaces";

export interface IWorkoutExercise {
  name: string;
  sets: ISet[];
}
export interface IWorkoutRes {
  programName: string;
  exercises: IWorkoutExercise[];
}

export interface IWorkout {
  id: string;
  createdAt: Date;
  program: IProgram;
  sets: ISet[];
  isArcived: boolean;
}
