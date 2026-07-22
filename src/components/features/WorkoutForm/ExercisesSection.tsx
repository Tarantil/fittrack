import { Dumbbell, SlidersHorizontal, Scale } from "lucide-react"
import classes from "./ExercisesSection.module.css"
import Button from "../../ui/Button";
import NoExercises from "./NoExercises";
import ExerciseForm from "./ExerciseForm";
import { useState } from "react";
import ExerciseItem from "./ExerciseItem";
import { getWorkoutStats } from "../../../utils/workoutStats";
import type { Exercise, NewExercise } from "../../../types/workout.types";
type ExercisesSectionProps = {
    exercises:Exercise[],
    onAddExercise:(newExercise:NewExercise)=>void,
    onEditExercise:(exercise:Exercise)=>void,
    onDeleteExercise:(id:string)=>void
};
export default function ExercisesSection({exercises, onAddExercise, onEditExercise, onDeleteExercise}:ExercisesSectionProps){
    const [formState, setFormState] = useState<'add'|'edit'|'hidden'>('hidden');
    const [editingExerciseId, setEditingExerciseId] = useState<string | null>(null);
    function showAddFormHandler(){
        setFormState('add');
    }
    function showEditFormHandler(id:string){
        setFormState('edit');
        setEditingExerciseId(id);
    }
    function hideFormHandler(){
        setFormState('hidden');
        setEditingExerciseId(null);
    }
    
   const {totalSets, totalReps, totalVolume} = getWorkoutStats(exercises);
   let editingExercise=null;
   if(editingExerciseId){
    editingExercise = exercises.find(
        exercise => exercise.id === editingExerciseId
    );
   }
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
                exercises.map((item:Exercise)=>(
                    <ExerciseItem 
                        key={`workout-${crypto.randomUUID()}`} 
                        {...item} 
                        onDeleteExercise={onDeleteExercise}
                        onEdit={showEditFormHandler}
                    />
                )) :
                <NoExercises />
            }
            {formState==='hidden' &&
                <Button type="button" variant="outline" onClick={showAddFormHandler} className={classes['center-btn']}>+ Add Exercise</Button>}
            {formState==='add' && <ExerciseForm onHide={hideFormHandler} mode="add" onAddExercise={onAddExercise}/>}
            
            {editingExercise && <ExerciseForm key={editingExercise.id} onHide={hideFormHandler} mode="edit" onEditExercise={onEditExercise} exercise={editingExercise}/>}
        </>
    );
}