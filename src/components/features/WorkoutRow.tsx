import { useRef, useState } from 'react';
import classes from './WorkoutRow.module.css';
import { useClickOutside } from '../../hooks/useClickOutside';
import Button from '../ui/Button';
import type { Workout } from '../../types/workout.types';
import RoundIcon from '../ui/RoundIcon';
import { Link } from 'react-router-dom';
import { Eye, Pencil, Trash2 } from 'lucide-react';

export default function WorkoutRow({id, icon, name, date, duration, exerciseCount, totalVolume}:Workout){
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    function handleDropdownVisibility(){
        setDropdownIsVisible(prev=>!prev);
    }
    useClickOutside(dropdownRef, ()=>setDropdownIsVisible(false), dropdownIsVisible);
   
    
    return (
        <div className={classes.row}>
            <div className={classes.head}>
                <RoundIcon icon={icon} size="medium" />
                <div className={classes.description}>
                    <h4>{name}</h4>
                    <p>{date}・{duration} min</p>
                </div>
            </div>
            <div className={classes.exercises}>
                {exerciseCount} exercises
            </div>
            <div>
                <p>{totalVolume} kg</p>
            </div>
            <div className={classes["dots-wrapper"]} >
                <div className={classes.dots} ref={dropdownRef}>
                    <Button className={classes.button} onClick={handleDropdownVisibility}>⋮</Button>
                    <div className={`${classes.dropdown} ${dropdownIsVisible ?classes.active:''}`}>
                    <ul>
                        <li><Link to={`/workout/${id}`}><Eye size={16} strokeWidth={1} /> View</Link></li>
                        <li><Button><Pencil size={16} strokeWidth={1} /> Edit</Button></li>
                        <li><Button className={classes['delete-btn']}><Trash2 size={16} strokeWidth={1} /> Delete</Button></li>
                    </ul>
                </div>
                </div>
                
            </div>
        </div>
    );
}