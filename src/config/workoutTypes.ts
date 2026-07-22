import type { WorkoutType } from "../types/workout.types";
import { Dumbbell, Ellipsis, HeartPulse, LensConcave, SportShoe } from "lucide-react";
import { type LucideIcon } from 'lucide-react';

  export const workoutTypeConfig = {
    push: {
      label: "Push",
      icon: Dumbbell,
    },
    pull: {
      label: "Pull",
      icon: Dumbbell,
    },
    legs: {
      label: "Legs",
      icon: SportShoe,
    },
    "full-body": {
      label: "Full Body",
      icon: LensConcave,
    },
    cardio: {
      label: "Cardio",
      icon: HeartPulse,
    },
    other: {
      label: "Other",
      icon: Ellipsis,
    },
  } satisfies Record<
    WorkoutType,
    {
      label: string;
      icon: LucideIcon;
    }
  >;
  