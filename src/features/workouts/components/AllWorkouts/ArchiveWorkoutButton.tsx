import { Button } from "primereact/button";
import { IoMdArchive } from "react-icons/io";
import { useDeleteResource } from "../../../../common/hooks/useApi";
import { workoutsApiPaths } from "../../workouts.api";
import { toast } from "react-toastify";
import { SyntheticEvent } from "react";
import { useQueryClient } from "react-query";

interface IArchiveWorkoutButton {
  workoutId: string;
}
const ArchiveWorkoutButton = ({ workoutId }: IArchiveWorkoutButton) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useDeleteResource<void, void>(
    workoutsApiPaths.deleteWorkout(workoutId),
    {
      onSuccess() {
        toast.success("Workout succesfuly archived");
        queryClient.refetchQueries(workoutsApiPaths.workouts(false));
        queryClient.refetchQueries(workoutsApiPaths.workouts(true));
      },
    }
  );

  const onArchive = (e: SyntheticEvent) => {
    e.stopPropagation();
    mutate();
  };

  return (
    <Button loading={isLoading} rounded aria-label="Filter" onClick={onArchive}>
      <IoMdArchive />
    </Button>
  );
};

export default ArchiveWorkoutButton;
