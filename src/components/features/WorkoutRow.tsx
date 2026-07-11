import { useRef, useState } from 'react';
import classes from './WorkoutRow.module.css';
import { useClickOutside } from '../../hooks/useClickOutside';
type WorkoutRowProps = {
    icon:React.JSX.Element,
    name:string,
    date:string,
    duration:number,
    numExercises:number,
    totalWeight:number
}
export default function WorkoutRow({icon, name, date, duration, numExercises, totalWeight}:WorkoutRowProps){
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    function handleShowDropdown(){
        setDropdownIsVisible(true);
    }
    function handleHideDropdown(){
        setDropdownIsVisible(false);
    }
    
    
    return (
        <div className={classes.row}>
            <div className={classes.head}>
                {icon}
                <div className={classes.description}>
                    <h4>{name}</h4>
                    <p>{date}・{duration} min</p>
                </div>
            </div>
            <div className={classes.exercises}>
                {numExercises} exercises
            </div>
            <div>
                <p>{totalWeight} kg</p>
            </div>
            <div className={classes["dots-wrapper"]} >
                <div className={classes.dots} onMouseOver={handleShowDropdown} onMouseOut={handleHideDropdown} ref={dropdownRef}>⋮
                <div className={`${classes.dropdown} ${dropdownIsVisible ?classes.active:undefined}`}>
                    <ul>
                        <li>View</li>
                        <li>Edit</li>
                        <li>Delete</li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    );
}