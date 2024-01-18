import Header from "../../common/components/Layout/Header/Header";
import WorkoutSets from "../../features/workouts/components/WorkoutSets/WorkoutSets";
const NewWorkout = () => {
  ///TODO: Using this, We'll retreive the next workout, for the selected program
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const { programId } = useParams<{ programId?: string }>();

  return (
    <div>
      <Header title="Workout:ChestDay" />
      <WorkoutSets />
    </div>
  );
};

export default NewWorkout;
