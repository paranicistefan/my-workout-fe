export const programsApiPaths = {
  allPrograms: `/programs/?getAll=true`,
  programs: "/programs",
  program: (programId: string) => `/programs/${programId}`,
};
