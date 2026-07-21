import { useWorkouts } from "../../hooks/useWorkouts";
import Widget from "../layout/Widget";
import WorkoutRow from "./WorkoutRow";


export default function RecentWorkouts(){
    const {workouts} = useWorkouts();
    return (
            <Widget title="Recent Workouts" link={{url:'/workouts', title:'View All'}}>
                {workouts.map(item=>(
                    <WorkoutRow key={item.id} {...item}/>
                ))}
            </Widget>
        
    )
}