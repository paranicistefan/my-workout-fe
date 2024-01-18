import { SyntheticEvent, useState } from "react";
import { Button } from "primereact/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { PrimeIcons } from "primereact/api";
import { StyledNewExerciseForm } from "./styles";
import ProgramExercise from "../ProgramExercise/ProgramExercise";
import { usePostResource } from "../../../../common/hooks/useApi";
import { IAddExerciseReq, IProgram } from "../../programs.interfaces";
import { programsApiPaths } from "../../programs.api";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

const NewExerciseForm = () => {
  const { id: programId } = useParams();
  const [open, setOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const { mutate: addExercise, isLoading: isAddingExercise } = usePostResource<
    IAddExerciseReq,
    IProgram
  >(programsApiPaths.programExercises(programId || ""), {
    onSuccess() {
      toast.success("Program Succesfully updated");
      queryClient.refetchQueries(programsApiPaths.program(programId || ""));
      setOpen(false);
    },
  });

  const onSubmit = (selectedExercise: string) =>
    addExercise({ selectedExercise });

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
        <ProgramExercise isSubmiting={isAddingExercise} onSubmit={onSubmit} />
        <Button rounded aria-label="Filter" onClick={onDelete()}>
          <FaRegTrashAlt />
        </Button>
      </StyledNewExerciseForm>
    );
  return <Button onClick={onAdd} icon={PrimeIcons.PLUS} label="Add Exercise" />;
};

export default NewExerciseForm;
