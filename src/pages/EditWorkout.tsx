import { Link, useParams } from 'react-router-dom';
import WorkoutForm from '../components/features/WorkoutForm/WorkoutForm';
import classes from './EditWorkout.module.css'
import { useWorkouts } from '../hooks/useWorkouts';
import ButtonLink from '../components/ui/ButtonLink';
export default function EditWorkout(){
    const params = useParams();
    const {workouts} = useWorkouts();
    const editingWorkout = workouts.find(
        workout => workout.id === params.workoutId
    );
    if (!editingWorkout) {
        return (
            <div className={classes['no-results']}>
                <div className={classes.head}>
                    <h1>Workout Not Found</h1>
                    <p>The workout you're looking for doesn't exist or may have been deleted.</p>
                </div>
                <ButtonLink to="/workouts" variant='primary'>Back to Workouts</ButtonLink>
            </div>
        );
    }
    return (<>
        <div className={classes.head}>
            <h1>Edit Workout</h1>
            <p>Update your workout details and exercises.</p>
        </div>
        <div className={classes.content}>
                    <WorkoutForm mode="edit" workout={editingWorkout}/> 
        </div>
    </>);
}