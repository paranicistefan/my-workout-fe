import { useParams } from "react-router-dom";
import Accordion from "../../../../common/components/Accordion/Accordion";
import ContentBox from "../../../../common/components/content/ContentBox";
import { useGetResource } from "../../../../common/hooks/useApi";
import { workoutsApiPaths } from "../../workouts.api";
import { IWorkoutRes } from "../../workouts.types";
import Header from "../../../../common/components/Layout/Header/Header";
import SetsForm from "../WorkoutSets/SetsForm";
import { StyledWorkoutSetsWrapper } from "../WorkoutSets/styles";

const ViewWorkout = () => {
  const { id } = useParams();
  const {
    data: workout,
    isLoading,
    error,
  } = useGetResource<IWorkoutRes>(workoutsApiPaths.workout(id || ""), {
    refetchOnWindowFocus: false,
  });

  return (
    <StyledWorkoutSetsWrapper>
      <Header title={`Workout:${workout?.programName}`} />
      <ContentBox
        isLoading={isLoading}
        dataLength={workout?.exercises.length}
        error={error as string}
      >
        {workout?.exercises.map((exercise, index) => (
          <Accordion
            key={index}
            title={exercise.name}
            content={<SetsForm sets={exercise.sets} />}
          />
        ))}
      </ContentBox>
    </StyledWorkoutSetsWrapper>
  );
};

export default ViewWorkout;
