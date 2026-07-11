import Card from "../ui/Card";
import RoundIcon from "../ui/RoundIcon";
import Widget from "../ui/Widget";
import WorkoutRow from "./WorkoutRow";
import {Dumbbell} from 'lucide-react';

export default function RecentWorkouts(){
    return (
        <Card>
            <Widget title="Recent Workouts" link={{url:'/workouts', title:'View All'}}>
                <WorkoutRow icon={<RoundIcon icon={<Dumbbell />} size="medium" />} name="Leg Day" date="Yesterday" duration={72} numExercises={18} totalWeight={18400}/>
            </Widget>
        </Card>
        
    )
}