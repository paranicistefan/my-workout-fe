import { format } from "date-fns";
import Element from "../../../../common/components/Element/Element";
import ContentBox from "../../../../common/components/content/ContentBox";
import { useGetResource } from "../../../../common/hooks/useApi";
import { workoutsApiPaths } from "../../../workouts/workouts.api";
import { toast } from "react-toastify";
import { IWorkout } from "../../../workouts/workouts.types";

const LastWorkouts = () => {
  const { data, isLoading } = useGetResource<IWorkout[]>(
    workoutsApiPaths.workouts(false),
    {
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );
  return (
    <ContentBox dataLength={data?.length || 0} isLoading={isLoading}>
      {data?.map((workout) => (
        <Element
          key={workout.id}
          title={`${format(workout.createdAt, "dd.MM.yyyy")} - ${
            workout.program.name
          }`}
        />
      ))}
    </ContentBox>
  );
};

export default LastWorkouts;
