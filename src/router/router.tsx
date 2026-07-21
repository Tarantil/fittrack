import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../pages/Root';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Exercises from '../pages/Exercises';
import Progress from '../pages/Progress';
import Workouts from '../pages/Workouts';
import NewWorkout from '../pages/NewWorkout';
import { WorkoutDetails } from '../pages/WorkoutDetails';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'exercises', element: <Exercises /> },
            { path: 'progress', element: <Progress /> },
            { 
                path: 'workouts', 
                children: [
                    {index:true, element: <Workouts />},
                    {path: 'new', element:<NewWorkout />},
                    {path:':workoutId', element:<WorkoutDetails />}
                ]
             }
        ]
    }
]);

