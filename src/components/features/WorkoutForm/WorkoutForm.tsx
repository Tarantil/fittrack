import WorkoutTypeOption from "./WorkoutTypeOption";
import Widget from "../../layout/Widget";
import classes from "./WorkoutForm.module.css";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import ExercisesSection from "./ExercisesSection";
import { useWorkouts } from "../../../hooks/useWorkouts";
import { useState } from "react";
import type {Exercise, NewExercise, Workout, WorkoutType } from "../../../types/workout.types";
import { workoutTypeConfig } from "../../../config/workoutTypes";
import { useNavigate } from "react-router-dom";
type AddProps = {
    mode: "add"
};

type EditProps = {
    mode: "edit"
    workout: Workout;
};

type WorkoutFormProps = (AddProps | EditProps);
export default function WorkoutForm(props:WorkoutFormProps){
    const navigate = useNavigate();
    const {mode} = props;
    const workout = mode === "edit" ? props.workout : null;
    const {editWorkout, addWorkout} = useWorkouts(); 
    const [exercises, setExercises] = useState<Exercise[]>(workout?workout.exercises:[]);
    function addExerciseHandler(exercise:NewExercise){
        const newExercise: Exercise = {
            ...exercise,
            id: `exercise-${crypto.randomUUID()}`,
          };
        setExercises(prev=>[...prev, newExercise]);
    }
    function editExerciseHandler(exercise:Exercise){
        setExercises(prev => prev.map(item=>
            item.id===exercise.id ? {...exercise, id:item.id}:item
        )) 
    }
    function deleteExerciseHandler(id:string){
        setExercises(prev=>prev.filter(item=>item.id!==id));
    }
    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if(exercises.length===0){
            return;
        } 
        if(mode==='add'){
            addWorkout({
                name: formData.get("name") as string,
                date: formData.get("date") as string,
                type: formData.get("workout-type") as WorkoutType,
                exercises
            });
        }
        else{
            editWorkout(props.workout.id, {
                name: formData.get("name") as string,
                date: formData.get("date") as string,
                type: formData.get("workout-type") as WorkoutType,
                exercises
            });
        }
        navigate("/workouts");
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
                    <Widget title="Workout Details">
                        <div className={classes['workout-details']}>
                            <div>
                                <label htmlFor="name">Workout Name</label>
                                <input type="text" id="name" name="name" required defaultValue={workout?.name}/>
                            </div>
                            <div>
                                <label htmlFor="date">Date</label>
                                <input type="datetime-local" id="date" name="date" required defaultValue={workout?.date}/>
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
                                    defaultChecked={workout?.type===type}
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
                            <ExercisesSection 
                            exercises={exercises} 
                            onAddExercise={addExerciseHandler}
                            onEditExercise={editExerciseHandler}
                            onDeleteExercise={deleteExerciseHandler}/>
                            <div className={classes.footer}>
                            <Button type="submit" variant='primary'>Save Workout</Button>
                            </div>
                        </Card>
                    </form>
    );
}