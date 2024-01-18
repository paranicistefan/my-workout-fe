import { Button } from "primereact/button";
import { Input } from "../../../../common/components/Input/Input";
import { StyledExerciseForm } from "./styles";
import { useState, ChangeEvent, FormEvent } from "react";
import { IExerciseReq } from "../../exercises.interfaces";
interface IExerciseForm {
  exercise: IExerciseReq;
  onSubmit: (values: IExerciseReq) => void;
  isSubmiting: boolean;
}
const ExerciseForm = ({ exercise, onSubmit, isSubmiting }: IExerciseForm) => {
  const [data, setData] = useState<IExerciseReq>(exercise);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  const isExerciseDifferent = JSON.stringify(exercise) !== JSON.stringify(data);

  return (
    <StyledExerciseForm onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Name"
        placeholder="Exercise Name"
        onChange={handleChange}
        value={data.name}
      />
      <Input
        name="targetedGroupe"
        placeholder="What does this one hit ?"
        label="Targeted Grupe"
        onChange={handleChange}
        value={data.targetedGroupe}
      />
      {isExerciseDifferent && (
        <Button type="submit" label="Save Changes" loading={isSubmiting} />
      )}
    </StyledExerciseForm>
  );
};

export default ExerciseForm;
