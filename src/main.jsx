import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './assets/Compontent/Root/Root'
import Body from './assets/Compontent/Body/Body'
import Contact from './assets/Compontent/Contact/Contact'

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
    ] ,
  }  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
