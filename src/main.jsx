import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element: <div>this from router page </div>
  } , 
  {
    path: 'home',
    element : <div>this is home page </div>
  },
  {
    path: 'about',
    element : <div>this is about page </div>
  },
  {
    path: 'contact',
    element : <div>this is contact page </div>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
