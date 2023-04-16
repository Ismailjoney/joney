import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './Router/Router'
 

function App() {
  return (
    <div className='app'>
      <RouterProvider router ={route}></RouterProvider>
    </div>
  )
}

export default App
