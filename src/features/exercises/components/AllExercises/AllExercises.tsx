import ContentBox from "../../../../common/components/content/ContentBox";
import { IExercise } from "../../exercises.interfaces";
import { useGetResource } from "../../../../common/hooks/useApi";
import { exercisesApiPaths } from "../../exercises.api";
import NewExerciseForm from "../NewExerciseForm/NewExerciseForm";
import ViewExercise from "../ViewExercise/ViewExercise";

const AllExercises = () => {
  const { data, isLoading, error } = useGetResource<IExercise[]>(
    exercisesApiPaths.exercises
  );

  return (
    <ContentBox
      dataLength={data?.length || 0}
      isLoading={isLoading}
      error={error as string}
    >
      {data?.map((exercise) => (
        <ViewExercise exercise={exercise} key={exercise.id} />
      ))}
      <NewExerciseForm />
    </ContentBox>
  );
};

export default AllExercises;
