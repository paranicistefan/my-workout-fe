import { useNavigate } from "react-router-dom";
import Element from "../common/components/Element/Element";
import Header from "../common/components/Layout/Header/Header";
import MyPrograms from "../features/dashboard/components/MyPrograms/MyPrograms";
import { RouteEnum } from "./routes/enums";
import LastWorkouts from "../features/dashboard/components/LastWorkouts/LastWorkouts";

const Dashboard = () => {
  const navigate = useNavigate();
  const onStartWorkout = () => navigate(RouteEnum.NewWorkout);
  return (
    <div>
      <Header title="Welcome ✌️" />
      <Element title="Start a workout 💪" onClick={onStartWorkout} />
      <h4>My Programs:</h4>
      <MyPrograms />
      <h4>Last Workouts:</h4>
      <LastWorkouts />
    </div>
  );
};

export default Dashboard;
