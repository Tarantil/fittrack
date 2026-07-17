import ThemeContextProvider from './context/ThemeProvider';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom'
function App() {

  return (
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
  )
}

export default App
