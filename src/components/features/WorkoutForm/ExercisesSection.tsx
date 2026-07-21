import { Dumbbell, SlidersHorizontal, Scale } from "lucide-react"
import classes from "./ExercisesSection.module.css"
import Button from "../../ui/Button";
import NoExercises from "./NoExercises";
import ExerciseForm from "./ExerciseForm";
import { useState } from "react";
import ExerciseItem from "./ExerciseItem";
import { getWorkoutStats } from "../../../utils/workoutStats";
import type { Exersise } from "../../../types/workout.types";
type ExercisesSectionProps = {
    exercises:Exersise[],
    onAddExercise:(newExercise:{name:string, sets:number, reps:number, weight:number})=>void
};
export default function ExercisesSection({exercises, onAddExercise}:ExercisesSectionProps){
    const [addingExercises, setAddingExercices] = useState(false)
    function showFormHandler(){
        setAddingExercices(true);
    }
    function hideFormHandler(){
        setAddingExercices(false);
    }
    
   const {totalSets, totalReps, totalVolume} = getWorkoutStats(exercises);
    return (
        <>
            <div className={classes.head}>
                <h2>Exercises</h2>
            </div>
            <div className={classes['exercises-details']}>
                <div className={classes.point}>
                    <Dumbbell />
                    <div>
                        <div className={classes.count}>{exercises.length}</div>
                        <p>Exercises</p>
                    </div>
                </div>
                <div className={classes.point}>
                    <SlidersHorizontal />
                    <div>
                        <div className={classes.count}>{totalSets}</div>
                        <p>Sets</p>
                    </div>
                </div>
                <div className={classes.point}>
                    <SlidersHorizontal />
                    <div>
                        <div className={classes.count}>{totalReps}</div>
                        <p>Reps</p>
                    </div>
                </div>
                <div className={classes.point}>
                    <Scale />
                    <div>
                        <div className={classes.count}>{totalVolume} kg</div>
                        <p>Total Volume</p>
                    </div>
                </div>
            </div>
            {exercises.length>0 ?
                exercises.map((item:Exersise)=><ExerciseItem key={`workout-${crypto.randomUUID()}`} {...item} />) :
                <NoExercises />
            }
            {!addingExercises ?
                <Button type="button" variant="outline" onClick={showFormHandler} className={classes['center-btn']}>+ Add Exercise</Button> :
                <ExerciseForm onHide={hideFormHandler} onAddExercise={onAddExercise}/>
            }
        </>
    );
}