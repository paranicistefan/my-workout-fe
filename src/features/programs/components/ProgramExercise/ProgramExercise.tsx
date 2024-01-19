import { Button } from "primereact/button";
import { useState, FormEvent, useCallback } from "react";
import Select from "../../../../common/components/Input/Select";
import { useGetResource } from "../../../../common/hooks/useApi";
import { exercisesApiPaths } from "../../../exercises/exercises.api";
import { toast } from "react-toastify";
import { IExercise } from "../../../exercises/exercises.interfaces";
import { StyledProgramExercise } from "./styles";
import { DropdownChangeEvent } from "primereact/dropdown";

interface IProgramExercise {
  exerciseId?: string;
  onSubmit?: (id: string) => void;
  isSubmiting?: boolean;
  onChange?: (id: string) => void;
}
const ProgramExercise = ({
  exerciseId = "",
  isSubmiting,
  onSubmit,
  onChange,
}: IProgramExercise) => {
  const [selectedId, setSelectedId] = useState<string>(exerciseId);

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

  const handleChange = useCallback(
    (e: DropdownChangeEvent) => {
      const { value } = e;
      if (onChange) onChange(value);
      setSelectedId(value);
    },
    [setSelectedId, onChange]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit && onSubmit(selectedId);
  };

  const isExerciseDifferent = !onChange && selectedId !== exerciseId;

  return (
    <StyledProgramExercise onSubmit={handleSubmit}>
      <Select
        name=""
        placeholder="Select an Exercise"
        options={exercisesOptions}
        value={selectedId}
        onChange={handleChange}
      />
      {isExerciseDifferent && (
        <Button loading={isSubmiting} type="submit" label="Save Changes" />
      )}
    </StyledProgramExercise>
  );
};

export default ProgramExercise;
