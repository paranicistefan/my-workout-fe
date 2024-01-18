import { SyntheticEvent, useState } from "react";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { Button } from "primereact/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { PrimeIcons } from "primereact/api";
import { StyledNewExerciseForm } from "./styles";
import { IExercise, IExerciseReq } from "../../exercises.interfaces";
import { initialExerciseModel } from "../../exercises.models";
import { usePostResource } from "../../../../common/hooks/useApi";
import { exercisesApiPaths } from "../../exercises.api";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

const NewExerciseForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = usePostResource<IExerciseReq, IExercise>(
    exercisesApiPaths.exercises,
    {
      onSuccess() {
        toast.success("Exercises successfully added");
        queryClient.refetchQueries(exercisesApiPaths.exercises);
        setOpen(false);
      },
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );

  const onDelete = () => (e: SyntheticEvent) => {
    e.stopPropagation();
    setOpen(false);
  };
  const onAdd = (e: SyntheticEvent) => {
    e.preventDefault();
    setOpen(true);
  };
  if (open)
    return (
      <StyledNewExerciseForm>
        <ExerciseForm
          exercise={initialExerciseModel}
          onSubmit={mutate}
          isSubmiting={isLoading}
        />
        <Button rounded aria-label="Filter" onClick={onDelete()}>
          <FaRegTrashAlt />
        </Button>
      </StyledNewExerciseForm>
    );
  return <Button onClick={onAdd} icon={PrimeIcons.PLUS} label="Add Exercise" />;
};

export default NewExerciseForm;
