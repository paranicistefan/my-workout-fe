import { FormEvent, useState } from "react";
import { initialProgramState } from "../../programs.models";
import ContentBox from "../../../../common/components/content/ContentBox";
import { Button } from "primereact/button";
import { FaRegTrashAlt } from "react-icons/fa";
import ProgramExercise from "../ProgramExercise/ProgramExercise";
import Element from "../../../../common/components/Element/Element";
import { PrimeIcons } from "primereact/api";
import { Input } from "../../../../common/components/Input/Input";
import { onDataChange } from "../../../../common/utils/handlers";
import { StyledNewProgramForm } from "./styles";
import { usePostResource } from "../../../../common/hooks/useApi";
import { programsApiPaths } from "../../programs.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RouteEnum } from "../../../../pages/routes/enums";
import { IAddProgramReq, IProgram } from "../../programs.interfaces";

const NewProgramForm = () => {
  const [program, setProgram] = useState(initialProgramState);

  const navigate = useNavigate();

  const { mutate: addProgam, isLoading: isAddingProgram } = usePostResource<
    IAddProgramReq,
    IProgram
  >(programsApiPaths.programs, {
    onSuccess() {
      toast.success("Program successfully created");
      navigate(RouteEnum.Programs);
    },
    onError(error) {
      if (error instanceof Error) toast.error(error.message);
    },
  });

  const handleChangeProgram = (index: number) => (selectedExercise: string) => {
    console.log(index);

    setProgram((prev) => ({
      ...prev,
      programExercises: prev.programExercises.map((exercise, curent) =>
        curent === index ? selectedExercise : exercise
      ),
    }));
  };
  const handleRemoveProgram = (index: number) => () => {
    setProgram((prev) => ({
      ...prev,
      programExercises: prev.programExercises.filter(
        (_, curent) => curent !== index
      ),
    }));
  };
  const onAdd = () => {
    setProgram((prev) => ({
      ...prev,
      programExercises: [...prev.programExercises, ""],
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProgam(program);
  };
  return (
    <StyledNewProgramForm onSubmit={onSubmit}>
      <ContentBox>
        <Input
          name="name"
          value={program.name}
          onChange={onDataChange(setProgram)}
          label="Program Name"
          placeholder="Choose a program name"
        />
        {program.programExercises?.map((exercise, index) => (
          <Element
            key={index}
            rightElement={
              <Button
                type="button"
                onClick={handleRemoveProgram(index)}
                rounded
                aria-label="Filter"
              >
                <FaRegTrashAlt />
              </Button>
            }
          >
            <ProgramExercise
              key={index}
              exerciseId={exercise}
              onChange={handleChangeProgram(index)}
            />
          </Element>
        ))}
        <Button
          type="button"
          onClick={onAdd}
          icon={PrimeIcons.PLUS}
          label="Add Exercise"
        />
      </ContentBox>
      <Button
        loading={isAddingProgram}
        type="submit"
        icon={PrimeIcons.CHECK}
        label="Save new progrqam"
      />
    </StyledNewProgramForm>
  );
};

export default NewProgramForm;
