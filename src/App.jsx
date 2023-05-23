import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './Router/Router'
 

function App() {
  return (
    <div className='app bg-black'>
      <RouterProvider router ={route}></RouterProvider>
    </div>
  )
}

export default App
