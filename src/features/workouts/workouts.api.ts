export const workoutsApiPaths = {
  programWorkout: (programId: string) => `/workouts/${programId}`,
  workouts: (getArchived: boolean) =>
    `/workouts/${getArchived ? `?getArchived=true` : ""}`,
  workout: (workoutId: string) => `/workouts/getWorkout/${workoutId}`,
  deleteWorkout: (workoutId: string) => `/workouts/${workoutId}`,
};
