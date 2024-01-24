import { Button } from "primereact/button";
import { Number } from "../../../../common/components/Input/Number";
import { StyledSetRow, StyledSetsForm } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { IWorkoutRes, IWorkoutSet } from "../../workouts.types";
import { InputNumberChangeEvent } from "primereact/inputnumber";
import { PrimeIcons } from "primereact/api";

interface ISetsForm {
  sets: IWorkoutSet[];
  index?: number;
  setWorkoutData?: Dispatch<SetStateAction<IWorkoutRes>>;
}
const SetsForm = ({ sets, setWorkoutData, index }: ISetsForm) => {
  const handleChangeNumber = (
    e: InputNumberChangeEvent,
    setIndex: number,
    name: string
  ) => {
    setWorkoutData &&
      setWorkoutData((prev) => ({
        ...prev,
        exercises: prev?.exercises.map((exercise, curent) => {
          if (curent !== index) return exercise;
          return {
            ...exercise,
            sets: exercise.sets.map((set, currentSet) => {
              if (currentSet !== setIndex) return set;
              return { ...set, [name]: e.value };
            }),
          };
        }),
      }));
  };

  const handleAddSet = () => {
    setWorkoutData &&
      setWorkoutData((prev) => {
        return {
          ...prev,
          exercises: prev.exercises.map((exercise, currentExercises) => {
            if (currentExercises !== index) return exercise;
            return {
              ...exercise,
              sets: [...exercise.sets, { repetitions: 0, weight: 0 }],
            };
          }),
        };
      });
  };

  const handleRemoveSet = (setIndex: number) => {
    setWorkoutData &&
      setWorkoutData((prev) => {
        return {
          ...prev,
          exercises: prev.exercises.map((exercise, currentExercises) => {
            if (currentExercises !== index) return exercise;
            return {
              ...exercise,
              sets: exercise.sets.filter((_, index) => index !== setIndex),
            };
          }),
        };
      });
  };

  return (
    <StyledSetsForm>
      {sets.map((set, index) => (
        <StyledSetRow>
          <Number
            name="repetitions"
            onChange={(e) => handleChangeNumber(e, index, "repetitions")}
            label="Repetitons"
            value={set.repetitions}
            disabled={!setWorkoutData}
          />
          <Number
            name="weight"
            label="Weight"
            value={set.weight}
            onChange={(e) => handleChangeNumber(e, index, "weight")}
            maxFractionDigits={1}
            disabled={!setWorkoutData}
          />
          {!!setWorkoutData && (
            <Button
              onClick={() => handleRemoveSet(index)}
              rounded
              aria-label="Filter"
            >
              <FaRegTrashAlt />
            </Button>
          )}
        </StyledSetRow>
      ))}
      {!!setWorkoutData && (
        <Button onClick={handleAddSet} icon={PrimeIcons.PLUS} label="Add Set" />
      )}
    </StyledSetsForm>
  );
};

export default SetsForm;
