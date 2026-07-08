import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";

export default function RootLayout(){
    const [darkMode, setDarkMode] = useState<boolean>(false);
    
    function modeHandler(){
        setDarkMode((prev)=>!prev);
    }

    return (
        <div className="app" data-theme={darkMode?"dark":undefined}>
            <MainNavigation onSetMode={modeHandler}/>
            <Outlet />
            
        </div>
    );
}