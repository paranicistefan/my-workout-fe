import { useUser } from "../../../features/auth/Hooks/useUser";
import { RouteEnum } from "../../../pages/routes/enums";
import Navbar from "./Navbar/Navbar";
import { StyledContainer, StyledLayout } from "./styles";
import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const { user } = useUser();
  if (!user) return <Navigate to={RouteEnum.Login} />;
  return (
    <StyledContainer>
      <StyledLayout>
        <Outlet />
      </StyledLayout>
      <Navbar />
    </StyledContainer>
  );
};

export default Layout;
