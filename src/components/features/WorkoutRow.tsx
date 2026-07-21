import { useRef, useState } from 'react';
import classes from './WorkoutRow.module.css';
import { useClickOutside } from '../../hooks/useClickOutside';
import Button from '../ui/Button';
import type { Workout } from '../../types/workout.types';
import RoundIcon from '../ui/RoundIcon';
import { Link } from 'react-router-dom';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useWorkouts } from '../../hooks/useWorkouts';
import { getWorkoutStats } from '../../utils/workoutStats';
import { workoutTypeConfig } from '../../config/workoutTypes';

export default function WorkoutRow({ id, type, name, date, exercises }: Workout) {
    const {totalVolume} = getWorkoutStats(exercises);
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    function handleDropdownVisibility() {
        setDropdownIsVisible(prev => !prev);
    }
    useClickOutside(dropdownRef, () => setDropdownIsVisible(false), dropdownIsVisible);
    
    const {deleteWorkout} = useWorkouts();
    const Icon = workoutTypeConfig[type].icon;
    return (
        <div className={classes.row}>
            <div className={classes.head}>
                <RoundIcon icon={<Icon />} size="medium" />
                <div className={classes.description}>
                    <h4>{name}</h4>
                    <p>{date}</p>
                </div>
            </div>
            <div className={classes.exercises}>
                {exercises.length} exercises
            </div>
            <div>
                <p>{totalVolume} kg</p>
            </div>
            <div className={classes["dots-wrapper"]} >
                <div className={classes.dots} ref={dropdownRef}>
                    <Button
                        className={classes.button}
                        onClick={handleDropdownVisibility}
                        aria-label="Workout actions"
                        aria-expanded={dropdownIsVisible}
                        aria-haspopup="menu">⋮</Button>
                    <div className={`${classes.dropdown} ${dropdownIsVisible ? classes.active : ''}`} role="menu">
                        <ul>
                            <li><Link to={`/workouts/${id}`}><Eye size={16} strokeWidth={1} /> View</Link></li>
                            <li><Button><Pencil size={16} strokeWidth={1} /> Edit</Button></li>
                            <li><Button variant='danger-ghost' onClick={()=>deleteWorkout(id)}><Trash2 size={16} strokeWidth={1} /> Delete</Button></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}