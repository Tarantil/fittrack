import ThemeContextProvider from './context/ThemeProvider';
import WorkoutsProvider from './context/WorkoutsProvider';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom'
function App() {

  return (
    <WorkoutsProvider>
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
    </WorkoutsProvider>
  )
}

export default App
