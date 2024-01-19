import { Route, Routes as RouterRoutes } from "react-router-dom";
import Layout from "../../common/components/Layout/Layout";
import Dashboard from "../Dashboard";
import { RouteEnum } from "./enums";
import Login from "../Login";
import SignUp from "../SignUp";
import Program from "../Program";
import Programs from "../Programs";
import Workouts from "../Workouts";
import NewWorkout from "../NewWorkout/NewWorkout";
import ProgramChooser from "../NewWorkout/ProgramChooser";
import UnprotectedLayout from "../../common/components/Layout/UnprotectedLayout";
import Exercises from "../Exercises";
import NewProgram from "../NewProgram";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<UnprotectedLayout />}>
        <Route path={RouteEnum.Login} element={<Login />} />
        <Route path={RouteEnum.SignUP} element={<SignUp />} />
      </Route>
      <Route path={RouteEnum.Dashobard} element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={RouteEnum.Programs} element={<Programs />} />
        <Route path={RouteEnum.NewProgram} element={<NewProgram />} />
        <Route path={RouteEnum.Exercises} element={<Exercises />} />
        <Route path={RouteEnum.Program} element={<Program />} />
        <Route path={RouteEnum.Workouts} element={<Workouts />} />
        <Route path={RouteEnum.NewWorkout} element={<ProgramChooser />} />
        <Route path={RouteEnum.NewWorkoutProgram} element={<NewWorkout />} />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
