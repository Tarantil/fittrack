import { useState } from "react";
import type {Theme, ThemeContextObj} from "../types/theme.types";
import { ThemeContext } from "./theme-context";
type ThemeContextProviderProps = {
    children: React.ReactNode;
};
const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light');
    const changeThemeHandler = () =>{
        setTheme((prev)=>prev==='light'?'dark':'light');
    }
    const contextValue: ThemeContextObj = {
        theme: theme,
        changeTheme: changeThemeHandler,
    };
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeContextProvider;