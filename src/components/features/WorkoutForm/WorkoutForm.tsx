import WorkoutTypeOption from "./WorkoutTypeOption";
import Widget from "../../layout/Widget";
import classes from "./WorkoutForm.module.css";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import ExercisesSection from "./ExercisesSection";
import { useWorkouts } from "../../../hooks/useWorkouts";
import { useState } from "react";
import type {WorkoutType } from "../../../types/workout.types";
import { workoutTypeConfig } from "../../../config/workoutTypes";

export default function WorkoutForm(){
    const {addWorkout} = useWorkouts(); 
    const [exercises, setExercises] = useState<{name:string, sets:number, reps:number, weight:number}[]>([]);
    function addExerciseHandler(newExercise:{name:string, sets:number, reps:number, weight:number}){
        setExercises(prev=>[...prev, newExercise]);
    }
    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if(exercises.length===0){
            return;
        } 
        addWorkout({
            name: formData.get("name") as string,
            date: formData.get("date") as string,
            type: formData.get("workout-type") as WorkoutType,
            exercises
        });
        e.currentTarget?.reset();
        setExercises([]);
    }
    return (
        <form onSubmit={submitHandler}>
                    <Widget title="Workout Details">
                        <div className={classes['workout-details']}>
                            <div>
                                <label htmlFor="name">Workout Name</label>
                                <input type="text" id="name" name="name" required/>
                            </div>
                            <div>
                                <label htmlFor="date">Date</label>
                                <input type="datetime-local" id="date" name="date" required/>
                            </div>
                        </div>
                        <fieldset>
                            <legend>Workout Type</legend>
                            <div className={classes.options}>
                                {Object.entries(workoutTypeConfig).map(([type, config])=> (
                                    <WorkoutTypeOption
                                    key={type}
                                    value={type}
                                    title={config.label}
                                    icon={<config.icon />}
                                  />
                                ))}
                            </div>
                        </fieldset>
                        <div>
                            <label htmlFor="notes">Notes</label>
                            <textarea name="notes" id="notes" rows={5}></textarea>
                        </div>
                        </Widget>
                        <Card>
                            <ExercisesSection exercises={exercises} onAddExercise={addExerciseHandler}/>
                            <div className={classes.footer}>
                            <Button type="submit" variant='primary'>Save Workout</Button>
                            </div>
                        </Card>
                    </form>
    );
}