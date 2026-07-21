import { createContext } from "react";
import type {WorkoutsContextObj} from '../types/workout.types'

export const WorkoutsContext = createContext<WorkoutsContextObj | undefined>(undefined);