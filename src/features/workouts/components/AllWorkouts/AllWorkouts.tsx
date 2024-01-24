import { useNavigate } from "react-router-dom";
import ContentBox from "../../../../common/components/content/ContentBox";
import { useGetResource } from "../../../../common/hooks/useApi";
import { workoutsApiPaths } from "../../workouts.api";
import { IWorkout } from "../../workouts.types";
import { RouteEnum } from "../../../../pages/routes/enums";
import Element from "../../../../common/components/Element/Element";
import ArchiveWorkoutButton from "./ArchiveWorkoutButton";
import { format } from "date-fns";

const AllWorkouts = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetResource<IWorkout[]>(
    workoutsApiPaths.workouts(false)
  );

  const onClickProgram = (id: string) => {
    navigate(`${RouteEnum.Workouts}/${id}`);
  };

  return (
    <ContentBox
      dataLength={data?.length || 0}
      isLoading={isLoading}
      error={error as string}
    >
      {data?.map((workout) => (
        <Element
          title={`${format(workout.createdAt, "dd.MM.yyyy")} - ${
            workout.program.name
          }`}
          onClick={() => onClickProgram(workout.id)}
          rightElement={<ArchiveWorkoutButton workoutId={workout.id} />}
        />
      ))}
    </ContentBox>
  );
};

export default AllWorkouts;
