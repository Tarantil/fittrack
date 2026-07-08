import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-dark.png";
import logoLight from "../assets/logo.png";
import classes from "./Sidebar.module.css";
type SidebarProps = {
    darkMode: boolean
}
export default function Sidebar({darkMode}:SidebarProps){
    return (
        <aside className={classes.sidebar}>
            <Link to='/'>
                {darkMode && <img src={logoLight} alt="Logo" className={classes.logo}/>}
                {!darkMode && <img src={logo} alt="Logo" className={classes.logo}/>}
            </Link>
            <ul className={classes.nav}>
                <li><NavLink to='/' className={({isActive})=>isActive?classes.active:undefined}>Dashboard</NavLink></li>
                <li><NavLink to="/workouts" className={({isActive})=>isActive?classes.active:undefined}>Workouts</NavLink></li>
                <li><NavLink to="/exercises" className={({isActive})=>isActive?classes.active:undefined}>Exercises</NavLink></li>
                <li><NavLink to="/progress" className={({isActive})=>isActive?classes.active:undefined}>Progress</NavLink></li>
                
            </ul>
        </aside>
    );
}