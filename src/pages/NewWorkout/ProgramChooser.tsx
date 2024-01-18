import { useNavigate } from "react-router-dom";
import Header from "../../common/components/Layout/Header/Header";
import { RouteEnum } from "../routes/enums";
import AllPrograms from "../../features/programs/components/AllPrograms/AllPrograms";

const ProgramChooser = () => {
  const navigate = useNavigate();
  const onClickProgram = (id: string) =>
    navigate(`${RouteEnum.NewWorkout}/${id}`);
  return (
    <div>
      <Header title="Choose a Program" />
      <AllPrograms hideAddButton handleProgramClick={onClickProgram} />
    </div>
  );
};

export default ProgramChooser;
