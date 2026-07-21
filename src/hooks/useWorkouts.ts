import { useContext } from "react";
import { WorkoutsContext } from "../context/workouts-context";

export function useWorkouts(){
    const workoutCtx = useContext(WorkoutsContext);
    if(!workoutCtx){
        throw new Error('useWorkouts must be used within WorkoutsContextProvider.');
    }
    return workoutCtx;
}