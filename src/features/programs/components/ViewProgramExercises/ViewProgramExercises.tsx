import Accordion from "../../../../common/components/Accordion/Accordion";
import ContentBox from "../../../../common/components/content/ContentBox";
import ExerciseForm from "../ExerciseForm/ExerciseForm";
import { FaRegTrashAlt } from "react-icons/fa";
import { SyntheticEvent } from "react";
import { Button } from "primereact/button";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import { IExercise } from "../../../exercises/exercises.interfaces";

interface IViewProgramExercises {
  exercises?: IExercise[];
  isLoading: boolean;
}
const ViewProgramExercises = ({
  exercises,
  isLoading,
}: IViewProgramExercises) => {
  const onDelete = (deletedId: string) => (e: SyntheticEvent) => {
    e.stopPropagation();
    console.log(deletedId);
  };
  return (
    <ContentBox dataLength={exercises?.length || 0} isLoading={isLoading}>
      {exercises?.map((exercise) => (
        <Accordion
          key={exercise.id}
          title={exercise.name}
          content={<ExerciseForm key={exercise.id} exercise={exercise} />}
          rightElement={
            <Button rounded aria-label="Filter" onClick={onDelete(exercise.id)}>
              <FaRegTrashAlt />
            </Button>
          }
        />
      ))}
      <NewExerciseForm />
    </ContentBox>
  );
};

export default ViewProgramExercises;
