import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export function useTheme() {
    const themeCtx = useContext(ThemeContext);
    if (!themeCtx) {
        throw new Error('useTheme must be used within ThemeContextProvider.');
    }

    return themeCtx;
}