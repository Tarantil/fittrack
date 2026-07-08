import { NavLink } from "react-router-dom"
import ToggleButton from "./ToggleButton";

export default function MainNavigation({onSetMode}){
    return (
        <header>
            <ul>
                <li><NavLink to="/" className={({isActive})=>isActive?'active':undefined}>Dashboard</NavLink></li>
                <li><NavLink to="/exercises" className={({isActive})=>isActive?'active':undefined}>Exercises</NavLink></li>
                <li><NavLink to="/progress" className={({isActive})=>isActive?'active':undefined}>Progress</NavLink></li>
                <li><NavLink to="/workouts" className={({isActive})=>isActive?'active':undefined}>Workouts</NavLink></li>
            </ul>
            <ToggleButton name="mode" onClick={onSetMode}/>
        </header>
    );
}