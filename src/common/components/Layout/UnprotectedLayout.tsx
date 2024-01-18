import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../../features/auth/Hooks/useUser";
import { RouteEnum } from "../../../pages/routes/enums";
import { StyledLayout } from "./styles";

const UnprotectedLayout = () => {
  const { user } = useUser();
  if (user) return <Navigate to={RouteEnum.Dashobard} />;
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
};

export default UnprotectedLayout;
