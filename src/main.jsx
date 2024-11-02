import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './assets/Compontent/Root/Root'
import Body from './assets/Compontent/Body/Body'
import Contact from './assets/Compontent/Contact/Contact'
import Users from './assets/Compontent/Users/Users'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Root/>,
    children:[
        {
            path: '/body',
            element : <Body/>
        } ,
        {
            path: '/contact',
            element : <Contact/>
        } ,
        {
          path : 'users',
          loader : () => fetch('https://jsonplaceholder.typicode.com/users') ,
          element : <Users/>
        }
    ] ,
  }  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
