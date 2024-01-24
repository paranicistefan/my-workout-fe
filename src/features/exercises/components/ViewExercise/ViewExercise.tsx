import { Button } from "primereact/button";
import { SyntheticEvent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  useDeleteResource,
  usePutResource,
} from "../../../../common/hooks/useApi";
import { exercisesApiPaths } from "../../exercises.api";
import { IExerciseReq, IExercise } from "../../exercises.interfaces";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { useQueryClient } from "react-query";
import Accordion from "../../../../common/components/Accordion/Accordion";

interface IViewExercise {
  exercise: IExercise;
}
const ViewExercise = ({ exercise }: IViewExercise) => {
  const queryClient = useQueryClient();

  const { mutate: mutateEdit, isLoading: isUpdating } = usePutResource<
    IExerciseReq,
    IExercise
  >(exercisesApiPaths.exercise(exercise.id), {
    onSuccess() {
      toast.success("Exercises successfully edited");
      queryClient.refetchQueries(exercisesApiPaths.exercises);
    },
    onError(error) {
      if (error instanceof Error)
        toast(error.message, {
          type: "error",
        });
    },
  });

  const { mutate: mutateDelete } = useDeleteResource<void, void>(
    exercisesApiPaths.exercise(exercise.id),
    {
      onSuccess() {
        toast.success("Exercises successfully deleted");
        queryClient.refetchQueries(exercisesApiPaths.exercises);
      },
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );

  const exerciseReq = {
    name: exercise.name,
    targetedGroupe: exercise.targetedGroupe,
  };

  const onDelete = (e: SyntheticEvent) => {
    e.stopPropagation();
    mutateDelete();
  };
  return (
    <Accordion
      key={exercise.id}
      title={exercise.name}
      content={
        <ExerciseForm
          key={exercise.id}
          exercise={exerciseReq}
          onSubmit={mutateEdit}
          isSubmiting={isUpdating}
        />
      }
      rightElement={
        exercise.isUserExercise && (
          <Button rounded aria-label="Filter" onClick={onDelete}>
            <FaRegTrashAlt />
          </Button>
        )
      }
    />
  );
};

export default ViewExercise;
