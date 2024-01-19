import { IExercise } from "../exercises/exercises.interfaces";

export interface IProgram {
  id: string;
  name: string;
  createdAd: string;
  programExercises: IExercise[];
}
export interface IAddProgramReq {
  name: string;
  programExercises: string[];
}

export interface IAddExerciseReq {
  selectedExercise: string;
}

export interface IEditExerciseReq {
  oldExercise: string;
  newExercise: string;
}
export interface ISet {
  id: string;
  repetitions: number;
  weight: number;
}
