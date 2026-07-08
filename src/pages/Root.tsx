import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import classes from "./Root.module.css";
export default function RootLayout(){
    const [darkMode, setDarkMode] = useState<boolean>(false);
    
    function modeHandler(){
        setDarkMode((prev)=>!prev);
    }

    return (
        <div className="app" data-theme={darkMode?"dark":undefined}>
                <Sidebar darkMode={darkMode}/>
                <div className={classes.main}>
                    <MainNavigation onSetMode={modeHandler}/>
                    <Outlet />
                </div>
        </div>
    );
}