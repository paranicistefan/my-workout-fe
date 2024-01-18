import { Button } from "primereact/button";
import { Number } from "../../../../common/components/Input/Number";
import { ISet } from "../../../programs/programs.interfaces";
import { StyledSetRow, StyledSetsForm } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";

interface ISetsForm {
  sets: ISet[];
}
const SetsForm = ({ sets }: ISetsForm) => {
  return (
    <StyledSetsForm>
      {sets.map((set) => (
        <StyledSetRow>
          <Number label="Repetitons" value={set.repetitions} />{" "}
          <Number label="Weight" value={set.weight} />{" "}
          <Button rounded aria-label="Filter">
            <FaRegTrashAlt />
          </Button>
        </StyledSetRow>
      ))}
    </StyledSetsForm>
  );
};

export default SetsForm;
