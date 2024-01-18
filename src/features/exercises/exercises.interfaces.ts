export interface IExercise {
  id: string;
  name: string;
  targetedGroupe: string;
  isUserExercise?: boolean;
}

export interface IExerciseReq {
  name: string;
  targetedGroupe: string;
}
