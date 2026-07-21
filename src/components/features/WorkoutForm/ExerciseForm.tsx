import { X } from "lucide-react";
import Button from "../../ui/Button";
import classes from "./ExercisesSection.module.css";
import { useRef } from "react";
type ExerciseFormProps={
    onHide:()=>void,
    onAddExercise:(newExercise:{name:string, sets:number, reps:number, weight:number})=>void
};
export default function ExerciseForm({onHide, onAddExercise}:ExerciseFormProps){
    const nameRef = useRef<HTMLInputElement>(null);
    const setsRef = useRef<HTMLInputElement>(null); 
    const repsRef = useRef<HTMLInputElement>(null);
    const weightRef = useRef<HTMLInputElement>(null); 
    function addExerciseHandler(){
        const name = nameRef.current?.value ?? "";
        const sets = Number(setsRef.current?.value);
        const reps = Number(repsRef.current?.value);
        const weight = Number(weightRef.current?.value);
        onAddExercise({
            name:name,
            sets,
            reps,
            weight
        });
        onHide();
        nameRef.current!.value = "";
        setsRef.current!.value = "";
        repsRef.current!.value = "";
        weightRef.current!.value = "";
    }
    return (
        <div className={classes['add-exercise']}>
            <Button aria-label="Close add exercise" className={classes.close} type="button" onClick={onHide}><X /></Button>
            <label htmlFor="exercise-name">Exercise</label>
            <input type="text" name="exercise-name" id="exercise-name" ref={nameRef} required/>
            <div className={classes.details}>
                <div>
                    <label htmlFor="sets">Sets</label>
                    <input type="number" name="sets" id="sets" ref={setsRef} required/>
                </div>
                <div>
                    <label htmlFor="reps">Reps</label>
                    <input type="number" name="reps" id="reps" ref={repsRef} required/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input type="number" name="weight" id="weight" ref={weightRef} required/>
                </div>
            </div>
            <Button variant='primary' type="button" onClick={addExerciseHandler}>Add Exercise</Button>
        </div>
    );
}