import Accordion from "../../../../common/components/Accordion/Accordion";
import ContentBox from "../../../../common/components/content/ContentBox";
import { IWorkoutRes } from "../../workouts.types";
import SetsForm from "./SetsForm";

const WorkoutSets = () => {
  const demoWorkout: IWorkoutRes = {
    programName: "ChestDay",
    exercises: [
      {
        name: "Incline Press",
        sets: [{ id: "", repetitions: 20, weight: 22 }],
      },
    ],
  };
  return (
    <ContentBox isLoading={false} dataLength={0}>
      {demoWorkout.exercises.map((exercise) => (
        <Accordion
          key={exercise.name}
          title={exercise.name}
          content={<SetsForm sets={exercise.sets} />}
        />
      ))}
    </ContentBox>
  );
};

export default WorkoutSets;
