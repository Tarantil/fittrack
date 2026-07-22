import classes from './NewWorkout.module.css'
import WorkoutForm from '../components/features/WorkoutForm/WorkoutForm';
export default function NewWorkout(){
    return (
        <>
            <div className={classes.head}>
                <h1>Add New Workout</h1>
                <p>Create a new workout and exercises to track your progress.</p>
            </div>
            <div className={classes.content}>
                    <WorkoutForm mode="add"/> 
            </div>
        </>
    );
}