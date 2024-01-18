import { useNavigate } from "react-router-dom";
import Element from "../../../../common/components/Element/Element";
import ContentBox from "../../../../common/components/content/ContentBox";
import { IProgram } from "../../../programs/programs.interfaces";
import { RouteEnum } from "../../../../pages/routes/enums";
import { Button } from "primereact/button";
import { PrimeIcons } from "primereact/api";
import { useGetResource } from "../../../../common/hooks/useApi";
import { programsApiPaths } from "../../programs.api";
import { toast } from "react-toastify";

interface IAllPrograms {
  hideAddButton?: boolean;
  handleProgramClick?: (id: string) => void;
}

const AllPrograms = ({
  hideAddButton = false,
  handleProgramClick,
}: IAllPrograms) => {
  const { data, isLoading } = useGetResource<IProgram[]>(
    programsApiPaths.allPrograms,
    {
      onError(error) {
        if (error instanceof Error)
          toast(error.message, {
            type: "error",
          });
      },
    }
  );
  const navigate = useNavigate();
  const onClickProgram = (id: string) => {
    if (handleProgramClick) return handleProgramClick(id);
    navigate(`${RouteEnum.Programs}/${id}`);
  };
  const onAddProgram = () => navigate(RouteEnum.NewProgram);
  return (
    <ContentBox dataLength={data?.length || 0} isLoading={isLoading}>
      {data?.map((program) => (
        <Element
          title={program.name}
          onClick={() => onClickProgram(program.id)}
        />
      ))}
      {!hideAddButton && (
        <Button
          onClick={onAddProgram}
          icon={PrimeIcons.PLUS}
          label={"Add a new Program"}
        />
      )}
    </ContentBox>
  );
};

export default AllPrograms;
