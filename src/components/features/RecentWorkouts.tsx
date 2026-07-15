import Widget from "../layout/Widget";
import WorkoutRow from "./WorkoutRow";
import type { Workout } from '../../types/workout.types';
type RecentWorkoutsProps = {
    workouts: Workout[]
}
export default function RecentWorkouts({ workouts }:RecentWorkoutsProps){
    return (
            <Widget title="Recent Workouts" link={{url:'/workouts', title:'View All'}}>
                {workouts.map(item=>(
                    <WorkoutRow key={item.id} {...item}/>
                ))}
            </Widget>
        
    )
}