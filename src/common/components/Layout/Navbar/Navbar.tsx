import { RouteEnum } from "../../../../pages/routes/enums";
import { StyledLink, StyledNavbar } from "./styled";
import { IoIosHome } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";

const Navbar = () => {
  const routes = [
    {
      path: RouteEnum.Dashobard,
      label: "Home",
      icon: <IoIosHome className="text-xl" />,
    },
    {
      path: RouteEnum.Programs,
      label: "Programs",
      icon: <FaRegCalendarCheck className="text-xl" />,
    },
    {
      path: RouteEnum.Exercises,
      label: "Exercises",
      icon: <CgGym className="text-xl" />,
    },
    {
      path: RouteEnum.Workouts,
      label: "Workouts",
      icon: <GiGymBag className="text-xl" />,
    },
  ];
  return (
    <StyledNavbar>
      {routes.map((route) => (
        <StyledLink key={route.path} to={route.path}>
          {route.icon}
          {route.label}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;
