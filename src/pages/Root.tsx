import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";

export default function RootLayout(){
    const [darkMode, setDarkMode] = useState(false);
    let classes="main-layout";
    function modeHandler(){
        setDarkMode((prev)=>!prev);
    }
    
    if(darkMode){
        classes += " main-layout_dark";
    }
    return (
        <div className={classes}>
            <MainNavigation onSetMode={modeHandler}/>
            <Outlet />
            
        </div>
    );
}