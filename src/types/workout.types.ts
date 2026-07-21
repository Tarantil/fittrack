import { WORKOUT_TYPES } from "../config/workoutTypes"

export type Workout = {
    id:string,
    name:string,
    date:string,
    type:'push'|'pull'|'legs'|'full-body'|'cardio'|'other',
    exercises:Exersise[]
}
export type Exersise = {
    name:string,
    sets:number,
    reps:number,
    weight:number
}
export type WorkoutsContextObj = {
    workouts:Workout[],
    addWorkout:(workout:NewWorkout)=>void,
    editWorkout:(id: string, workout:Workout)=>void,
    deleteWorkout:(id: string)=>void
}

export type NewWorkout = Omit<Workout, "id">;

  
export type WorkoutType = typeof WORKOUT_TYPES[number];