import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import Sidebar from "../components/layout/Sidebar";
import classes from "./Root.module.css";
import { useTheme } from "../hooks/useTheme";
export default function RootLayout(){
    const {theme} = useTheme();
    return (
        <div className="app" data-theme={theme}>
        
                <Sidebar/>
                <div className={classes.main}>
                    <MainNavigation/>
                    <Outlet />
                </div>
        </div>
    );
}