import classes from './ExerciseItem.module.css';
import exerciseImg from '../../../assets/exercise1.png';
import type { Exercise } from '../../../types/workout.types';
import { useRef, useState } from 'react';
import Button from '../../ui/Button';
import { Pencil, Trash2, EllipsisVertical } from 'lucide-react';
import { useClickOutside } from '../../../hooks/useClickOutside';
type ExerciseItemProps= Exercise & {
    onDeleteExercise:(id:string)=>void,
    onEdit:(id:string)=>void
}
export default function ExerciseItem({id, name, sets, reps, weight, onDeleteExercise, onEdit}:ExerciseItemProps){
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [dropdownIsVisible, setDropdownIsVisible] = useState(false);
    function handleDropdownVisibility() {
        setDropdownIsVisible(prev => !prev);
    }

    useClickOutside(dropdownRef, () => setDropdownIsVisible(false), dropdownIsVisible);
    return (
        <div className={classes.item}>
            <div className={classes.details}>
                <img src={exerciseImg} alt={name} />
                <div>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className={classes.dimension}>
                <p className={classes.name}>Sets</p>
                <p className={classes.number}>{sets}</p>
            </div>
            <div className={classes.dimension}>
                <p className={classes.name}>Reps</p>
                <p className={classes.number}>{reps}</p>
            </div>
            <div className={classes.dimension}>
                <p className={classes.name}>Weight</p>
                <p className={classes.number}>{weight}</p>
            </div>
            <div className={classes.dots} ref={dropdownRef}>
                <Button
                    className={classes.button}
                    onClick={handleDropdownVisibility}
                    aria-label="Workout actions"
                    aria-expanded={dropdownIsVisible}
                    aria-haspopup="menu"><EllipsisVertical size={16} /></Button>
                <div className={`${classes.dropdown} ${dropdownIsVisible ? classes.active : ''}`} role="menu">
                    <ul>
                        <li><Button onClick={()=>onEdit(id)}><Pencil size={16} strokeWidth={1} /> Edit</Button></li>
                        <li><Button variant='danger-ghost' onClick={()=>onDeleteExercise(id)}><Trash2 size={16} strokeWidth={1} /> Delete</Button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}