import type { Exersise } from "../types/workout.types";

export function getWorkoutStats(exercises:Exersise[]){
    return  exercises.reduce(
        (stats, exercise) => {
            stats.totalSets += exercise.sets;
            stats.totalReps += exercise.sets*exercise.reps;
            stats.totalVolume += exercise.sets*exercise.reps*exercise.weight;
            return stats;
        },
        {
          totalSets: 0,
          totalReps: 0,
          totalVolume: 0,
        }
      );
}
