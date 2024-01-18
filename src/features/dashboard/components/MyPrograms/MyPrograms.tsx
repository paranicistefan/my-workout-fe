import { useNavigate } from "react-router-dom";
import Element from "../../../../common/components/Element/Element";
import ContentBox from "../../../../common/components/content/ContentBox";
import { RouteEnum } from "../../../../pages/routes/enums";
import { IProgram } from "../../../programs/programs.interfaces";
import { useGetResource } from "../../../../common/hooks/useApi";
import { programsApiPaths } from "../../../programs/programs.api";
import { toast } from "react-toastify";

const MyPrograms = () => {
  const { data, isLoading } = useGetResource<IProgram[]>(
    programsApiPaths.programs,
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
  const onClick = (id: string) => navigate(`${RouteEnum.Programs}/${id}`);
  return (
    <ContentBox dataLength={data?.length || 0} isLoading={isLoading}>
      {data?.map((program) => (
        <Element
          key={program.id}
          title={program.name}
          onClick={() => onClick(program.id)}
        />
      ))}
    </ContentBox>
  );
};

export default MyPrograms;
