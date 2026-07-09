import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layouts/MainNavigation";
import { useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import classes from "./Root.module.css";
export default function RootLayout(){
    const [mode, setMode] = useState<'light'|'dark'>('light');
    
    function handleModeToggle(){
        setMode((prev)=>prev=='light'?'dark':'light');
    }

    return (
        <div className="app" data-theme={mode}>
        
                <Sidebar mode={mode}/>
                <div className={classes.main}>
                    <MainNavigation onSetMode={handleModeToggle} toggleIsChecked={mode==='dark'}/>
                    <Outlet />
                </div>
        </div>
    );
}