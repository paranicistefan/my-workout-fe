import Header from "../common/components/Layout/Header/Header";
import AllWorkouts from "../features/workouts/components/AllWorkouts/AllWorkouts";
import ArchivedWorkouts from "../features/workouts/components/ArchivedWorkouts/ArchivedWorkouts";

const Workouts = () => {
  return (
    <div>
      <Header title="Workouts" />
      <h4>Last Workouts</h4>
      <AllWorkouts />
      <h4>Archived Workouts</h4>
      <ArchivedWorkouts />
    </div>
  );
};

export default Workouts;
