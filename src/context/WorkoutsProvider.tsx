import { useState } from "react";
import type { WorkoutsContextObj, Workout, NewWorkout } from "../types/workout.types";
import { WorkoutsContext } from "./workouts-context";
type WorkoutsContextProviderProps = {
    children: React.ReactNode;
};
const WORKOUTS:Workout[]=[
    {
      id:'leg-day-130726',
      type:'push',
      name:"Leg Day",
      date:"2026-07-21T13:21",
      exercises:[
        {id:'exercise-1-130726', name:'Leg Press', sets:4, reps:12, weight:20},
        {id:'exercise-2-130726', name:'Goblet Squat', sets:4, reps:12, weight:40}
      ]
    },
  ]
const WorkoutsProvider = ({children}:WorkoutsContextProviderProps) => {
    const [workouts, setWorkouts] = useState<Workout[]>(WORKOUTS);
    function addWorkoutHandler(workout: NewWorkout) {
        setWorkouts((prev) => {
          const newWorkout: Workout = {
            ...workout,
            id: `workout-${crypto.randomUUID()}`,
          };
      
          return [...prev, newWorkout];
        });
    }
    function editWorkoutHandler(workoutId:string, workout:NewWorkout){
        setWorkouts(prev => prev.map(item=>
            item.id===workoutId ? {...workout, id:item.id}:item
        )) 

    }
    function deleteWorkoutHandler(workoutId:string){
        setWorkouts(prev=>{
            return prev.filter(item=>item.id!==workoutId)
        })
    }
    const contextValue:WorkoutsContextObj = {
        workouts:workouts,
        addWorkout:addWorkoutHandler,
        editWorkout:editWorkoutHandler,
        deleteWorkout:deleteWorkoutHandler
    }
    return (
        <WorkoutsContext.Provider value={contextValue}>
            {children}
        </WorkoutsContext.Provider>
    )
}
export default WorkoutsProvider;