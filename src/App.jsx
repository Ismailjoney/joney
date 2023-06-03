import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './Router/Router'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
 
 


// Create a client
const queryClient = new QueryClient()


function App() {

    
  return (
    <div className='app bg-black'>

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
      </QueryClientProvider> 
    
    </div>
  )
}

export default App
