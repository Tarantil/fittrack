import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../pages/Root';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Exercises from '../pages/Exercises';
import Progress from '../pages/Progress';
import Workouts from '../pages/Workouts';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'exercises', element: <Exercises /> },
            { path: 'progress', element: <Progress /> },
            { path: 'workouts', element: <Workouts /> }
        ]
    }
]);

