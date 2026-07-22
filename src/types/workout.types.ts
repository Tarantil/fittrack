const WORKOUT_TYPES = [
    "push",
    "pull",
    "legs",
    "full-body",
    "cardio",
    "other",
  ] as const;
export type WorkoutType = typeof WORKOUT_TYPES[number];
export type Workout = {
    id:string,
    name:string,
    date:string,
    type:WorkoutType,
    exercises:Exercise[]
}
export type Exercise = {
    id:string,
    name:string,
    sets:number,
    reps:number,
    weight:number
}
export type WorkoutsContextObj = {
    workouts:Workout[],
    addWorkout:(workout:NewWorkout)=>void,
    editWorkout:(id: string, workout:NewWorkout)=>void,
    deleteWorkout:(id: string)=>void
}

export type NewWorkout = Omit<Workout, "id">;
export type NewExercise = Omit<Exercise, "id">;