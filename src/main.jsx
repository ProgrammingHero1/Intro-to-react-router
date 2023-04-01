import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Frients from './components/Friends/Frients';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';
import ErrorElement from './components/ErrorElement/ErrorElement';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   }, 
//   {
//     path: '/about',
//     element: <About></About>
//   }, 
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>, 
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path:'friends',
        element: <Frients></Frients>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'about',
        element:<About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <div>44444444444440444444444444</div>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
