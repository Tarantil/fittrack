import { X } from "lucide-react";
import Button from "../../ui/Button";
import classes from "./ExercisesSection.module.css";
import { useRef } from "react";
import type { Exercise, NewExercise } from "../../../types/workout.types";
type BaseProps = {
    onHide: () => void;
};

type AddProps = {
    mode: "add"
    onAddExercise: (exercise: NewExercise) => void;
};

type EditProps = {
    mode: "edit"
    exercise: Exercise;
    onEditExercise: (exercise: Exercise) => void;
};

type ExerciseFormProps = BaseProps & (AddProps | EditProps);
export default function ExerciseForm(props:ExerciseFormProps){
    const {onHide, mode} = props;
    const exercise = mode === "edit" ? props.exercise : null;

    const nameRef = useRef<HTMLInputElement>(null);
    const setsRef = useRef<HTMLInputElement>(null); 
    const repsRef = useRef<HTMLInputElement>(null);
    const weightRef = useRef<HTMLInputElement>(null); 
 
    function exerciseHandler(){
        const name = nameRef.current?.value ?? "";
        const sets = setsRef.current?.value ?? "";
        const reps = repsRef.current?.value ?? "";
        const weight = weightRef.current?.value ?? "";
        if (name.trim().length === 0 || sets.trim().length === 0 || reps.trim().length === 0 || weight.trim().length === 0) {
            return;
        }
        const enteredExercise:NewExercise={
            name:name,
            sets:Number(sets),
            reps:Number(reps),
            weight:Number(weight),
        }
        if(mode==='add'){
            props.onAddExercise(enteredExercise);
        }
        else{
            props.onEditExercise({
                id:props.exercise.id,
                ...enteredExercise
            });
        }
        
        onHide();
    }
    return (
        <div className={classes['add-exercise']}>
            <Button aria-label="Close add exercise" className={classes.close} type="button" onClick={onHide}><X /></Button>
            <label htmlFor="exercise-name">Exercise</label>
            <input type="text" name="exercise-name" id="exercise-name" ref={nameRef} defaultValue={exercise?.name}/>
            <div className={classes.details}>
                <div>
                    <label htmlFor="sets">Sets</label>
                    <input type="number" name="sets" id="sets" ref={setsRef} defaultValue={exercise?.sets}/>
                </div>
                <div>
                    <label htmlFor="reps">Reps</label>
                    <input type="number" name="reps" id="reps" ref={repsRef} defaultValue={exercise?.reps}/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" name="weight" id="weight" ref={weightRef} defaultValue={exercise?.weight}/>
                </div>
            </div>
            <Button variant='primary' type="button" onClick={exerciseHandler}>{mode==='add'?'Add':'Save'} Exercise</Button>
        </div>
    );
}