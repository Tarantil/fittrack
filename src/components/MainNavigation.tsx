import { NavLink } from "react-router-dom"

export default function MainNavigation(){
    return (
        <header>
            <ul>
                <li><NavLink to="/" className={({isActive})=>isActive?'active':undefined}>Dashboard</NavLink></li>
                <li><NavLink to="/exercises" className={({isActive})=>isActive?'active':undefined}>Exercises</NavLink></li>
                <li><NavLink to="/progress" className={({isActive})=>isActive?'active':undefined}>Progress</NavLink></li>
                <li><NavLink to="/workouts" className={({isActive})=>isActive?'active':undefined}>Workouts</NavLink></li>
            </ul>
        </header>
    );
}