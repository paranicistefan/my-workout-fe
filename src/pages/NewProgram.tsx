import Header from "../common/components/Layout/Header/Header";
import NewProgramForm from "../features/programs/components/NewProgramForm/NewProgramForm";
import { StyledPageWrapper } from "./styles";

const NewProgram = () => {
  return (
    <StyledPageWrapper>
      <Header title={`New program`} />
      <NewProgramForm />
    </StyledPageWrapper>
  );
};

export default NewProgram;
