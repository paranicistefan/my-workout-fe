export const programsApiPaths = {
  allPrograms: `/programs/?getAll=true`,
  programs: "/programs",
  program: (programId: string) => `/programs/${programId}`,
  programExercises: (programId: string) =>
    `/programs/programExercises/${programId}`,
  programExercise: (programId: string, exerciseId: string) =>
    `/programs/${programId}/${exerciseId}`,
};
