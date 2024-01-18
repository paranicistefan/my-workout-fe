import { SyntheticEvent, useState } from "react";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { Button } from "primereact/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { PrimeIcons } from "primereact/api";
import { initialExerciseModel } from "../../../exercises/exercises.models";
import { StyledNewExerciseForm } from "./styles";
import { IExerciseReq } from "../../../exercises/exercises.interfaces";

const NewExerciseForm = () => {
  const [exercise, setExercise] = useState<IExerciseReq | undefined>();
  const onDelete = () => (e: SyntheticEvent) => {
    e.stopPropagation();
    setExercise(undefined);
  };
  const onAdd = (e: SyntheticEvent) => {
    e.preventDefault();
    setExercise(initialExerciseModel);
  };
  if (exercise)
    return (
      <StyledNewExerciseForm>
        <ExerciseForm exercise={exercise} />
        <Button rounded aria-label="Filter" onClick={onDelete()}>
          <FaRegTrashAlt />
        </Button>
      </StyledNewExerciseForm>
    );
  return <Button onClick={onAdd} icon={PrimeIcons.PLUS} label="Add Exercise" />;
};

export default NewExerciseForm;
