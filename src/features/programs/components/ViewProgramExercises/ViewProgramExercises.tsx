import ContentBox from "../../../../common/components/content/ContentBox";
import { FaRegTrashAlt } from "react-icons/fa";
import { SyntheticEvent } from "react";
import { Button } from "primereact/button";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import { IExercise } from "../../../exercises/exercises.interfaces";
import Element from "../../../../common/components/Element/Element";
import ProgramExercise from "../ProgramExercise/ProgramExercise";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import {
  useDeleteResource,
  usePutResource,
} from "../../../../common/hooks/useApi";
import { IEditExerciseReq, IProgram } from "../../programs.interfaces";
import { programsApiPaths } from "../../programs.api";
import { toast } from "react-toastify";

interface IViewProgramExercises {
  exercises?: IExercise[];
  isLoading: boolean;
}
const ViewProgramExercises = ({
  exercises,
  isLoading,
}: IViewProgramExercises) => {
  const { id: programId } = useParams();
  const queryClient = useQueryClient();

  const { mutate: updateExercise, isLoading: isUpdatingExercise } =
    usePutResource<IEditExerciseReq, IProgram>(
      programsApiPaths.programExercises(programId || ""),
      {
        onSuccess() {
          toast.success("Program Succesfully updated");
          queryClient.refetchQueries(programsApiPaths.program(programId || ""));
        },
      }
    );
  const { mutate: deleteExercise } = useDeleteResource<IProgram, string>(
    programsApiPaths.program(programId || ""),
    {
      onSuccess() {
        toast.success("Exercise Succesfully removed from this program");
        queryClient.refetchQueries(programsApiPaths.program(programId || ""));
      },
    }
  );

  const onDelete = (deletedId: string) => (e: SyntheticEvent) => {
    e.stopPropagation();
    deleteExercise(deletedId);
  };

  const onUpdate = (oldExercise: string) => (newExercise: string) => {
    updateExercise({ newExercise, oldExercise });
  };

  return (
    <ContentBox dataLength={exercises?.length || 0} isLoading={isLoading}>
      {exercises?.map((exercise) => (
        <Element
          key={exercise.id}
          rightElement={
            <Button rounded aria-label="Filter" onClick={onDelete(exercise.id)}>
              <FaRegTrashAlt />
            </Button>
          }
        >
          <ProgramExercise
            key={exercise.id}
            exerciseId={exercise.id}
            isSubmiting={isUpdatingExercise}
            onSubmit={onUpdate(exercise.id)}
          />
        </Element>
      ))}
      <NewExerciseForm />
    </ContentBox>
  );
};

export default ViewProgramExercises;
