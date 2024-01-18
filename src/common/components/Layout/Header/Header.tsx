import { StyledBackIcon, StyledHeader } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteEnum } from "../../../../pages/routes/enums";

interface IHeader {
  title: string;
}
const Header = ({ title }: IHeader) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isNotDashboard = pathname !== RouteEnum.Dashobard;
  const onBack = () => navigate(-1);
  return (
    <StyledHeader>
      {isNotDashboard && <StyledBackIcon onClick={onBack} />}
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default Header;
