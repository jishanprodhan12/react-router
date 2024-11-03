import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './assets/Compontent/Root/Root'
import Body from './assets/Compontent/Body/Body'
import Contact from './assets/Compontent/Contact/Contact'
import Users from './assets/Compontent/Users/Users'
import ShowDetails from './assets/Compontent/ShowDetails/ShowDetails'
import Posts from './assets/Compontent/Posts/Posts'
import Post from './assets/Compontent/Post/Post'
import PostDetails from './assets/Compontent/PostDetails/PostDetails'
import ErrorPage from './assets/Compontent/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/body',
        element: <Body />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },
      {
        path: '/user/:userID',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <ShowDetails></ShowDetails>
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ],
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
