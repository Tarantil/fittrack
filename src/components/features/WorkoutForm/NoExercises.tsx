import { Dumbbell } from "lucide-react"
import RoundIcon from "../../ui/RoundIcon"
import classes from "./ExercisesSection.module.css"

export default function NoExercises(){
    return (
        <div className={classes['no-results']}>
            <RoundIcon size="extra-large" icon={<Dumbbell/>}/>
            <h4>No exercises added yet</h4>
            <p>Add exercises to build your workout</p>
        </div>
    );
}