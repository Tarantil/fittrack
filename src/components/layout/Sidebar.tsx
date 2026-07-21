import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-dark.png";
import logoLight from "../../assets/logo.png";
import classes from "./Sidebar.module.css";
import { useTheme } from "../../hooks/useTheme";
import { Dumbbell, House, SportShoe, TrendingUp } from "lucide-react";
export default function Sidebar(){
    const {theme} = useTheme();
    return (
        <aside className={classes.sidebar}>
            <Link to='/'>
                <img src={theme==='dark'?logoLight:logo} alt="Logo" className={classes.logo}/>
            </Link>
            <ul className={classes.nav}>
                <li><NavLink to='/' className={({isActive})=>isActive?classes.active:undefined}><House/> Dashboard</NavLink></li>
                <li><NavLink to="/workouts" className={({isActive})=>isActive?classes.active:undefined}><Dumbbell/> Workouts</NavLink></li>
                <li><NavLink to="/exercises" className={({isActive})=>isActive?classes.active:undefined}><SportShoe /> Exercises</NavLink></li>
                <li><NavLink to="/progress" className={({isActive})=>isActive?classes.active:undefined}> <TrendingUp /> Progress</NavLink></li>
                
            </ul>
        </aside>
    );
}