import { useParams } from "react-router-dom";
import Header from "../common/components/Layout/Header/Header";
import { useGetResource } from "../common/hooks/useApi";
import ViewProgramExercises from "../features/programs/components/ViewProgramExercises/ViewProgramExercises";
import { programsApiPaths } from "../features/programs/programs.api";
import { IProgram } from "../features/programs/programs.interfaces";
import { toast } from "react-toastify";
const Program = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetResource<IProgram>(
    programsApiPaths.program(id || ""),
    {
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );
  return (
    <div>
      <Header title={`Program: ${data?.name}`} />
      <ViewProgramExercises
        isLoading={isLoading}
        exercises={data?.programExercises}
      />
    </div>
  );
};

export default Program;
