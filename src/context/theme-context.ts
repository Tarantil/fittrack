import { createContext } from "react";
import type {ThemeContextObj} from '../types/theme.types';
export const ThemeContext = createContext<ThemeContextObj | undefined>(undefined);