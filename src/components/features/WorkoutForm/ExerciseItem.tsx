import classes from './ExersiseItem.module.css';
import exerciseImg from '../../../assets/exercise1.png';
import type { Exersise } from '../../../types/workout.types';
export default function ExerciseItem({name, sets, reps, weight}:Exersise){
    
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
        </div>
    );
}