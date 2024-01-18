import { Button } from "primereact/button";
import { StyledExerciseForm } from "./styles";
import { useState, FormEvent } from "react";
import Select from "../../../../common/components/Input/Select";
import { useGetResource } from "../../../../common/hooks/useApi";
import { exercisesApiPaths } from "../../../exercises/exercises.api";
import { toast } from "react-toastify";
import {
  IExerciseReq,
  IExercise,
} from "../../../exercises/exercises.interfaces";

interface IExerciseForm {
  exercise: IExerciseReq;
}
const ExerciseForm = ({ exercise }: IExerciseForm) => {
  const [data] = useState<IExerciseReq>(exercise);

  const { data: exercises } = useGetResource<IExercise[]>(
    exercisesApiPaths.exercises,
    {
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );

  const exercisesOptions = exercises?.map(({ id, name }) => ({
    label: name,
    value: id,
  }));
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  const isExerciseDifferent = JSON.stringify(exercise) !== JSON.stringify(data);

  return (
    <StyledExerciseForm onSubmit={handleSubmit}>
      <Select options={exercisesOptions} />
      {isExerciseDifferent && <Button type="submit" label="Save Changes" />}
    </StyledExerciseForm>
  );
};

export default ExerciseForm;
