import { useNavigate, useParams } from "react-router-dom";
import Accordion from "../../../../common/components/Accordion/Accordion";
import ContentBox from "../../../../common/components/content/ContentBox";
import {
  useGetResource,
  usePostResource,
} from "../../../../common/hooks/useApi";
import { workoutsApiPaths } from "../../workouts.api";
import { IWorkout, IWorkoutRes } from "../../workouts.types";
import SetsForm from "./SetsForm";
import Header from "../../../../common/components/Layout/Header/Header";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledWorkoutSetsWrapper } from "./styles";
import { Button } from "primereact/button";
import { PrimeIcons } from "primereact/api";
import { toast } from "react-toastify";
import { RouteEnum } from "../../../../pages/routes/enums";

const WorkoutSets = () => {
  const { programId } = useParams();
  const navigate = useNavigate();
  const [workoutData, setWorkoutData] = useState<IWorkoutRes>();
  const {
    data: workout,
    isLoading,
    error,
  } = useGetResource<IWorkoutRes>(
    workoutsApiPaths.programWorkout(programId || ""),
    { refetchOnWindowFocus: false }
  );

  const { mutate, isLoading: isSaving } = usePostResource<
    IWorkoutRes,
    IWorkout
  >(workoutsApiPaths.programWorkout(programId || ""), {
    onSuccess() {
      toast.success("Your workout has been saved");
      navigate(RouteEnum.Dashobard);
    },
  });

  useEffect(() => {
    setWorkoutData(workout);
  }, [workout]);

  return (
    <StyledWorkoutSetsWrapper>
      <Header title={`Workout:${workout?.programName}`} />
      <ContentBox
        isLoading={isLoading}
        dataLength={workoutData?.exercises.length}
        error={error as string}
      >
        {workoutData?.exercises.map((exercise, index) => (
          <Accordion
            key={index}
            title={exercise.name}
            content={
              <SetsForm
                index={index}
                sets={exercise.sets}
                setWorkoutData={
                  setWorkoutData as Dispatch<SetStateAction<IWorkoutRes>>
                }
              />
            }
          />
        ))}
      </ContentBox>
      <Button
        loading={isSaving}
        onClick={() => mutate(workoutData as IWorkoutRes)}
        icon={PrimeIcons.CHECK}
        label="Save Workout"
      />
    </StyledWorkoutSetsWrapper>
  );
};

export default WorkoutSets;
