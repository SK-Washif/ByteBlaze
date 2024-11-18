import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx'
import MainLayOut from './layouts/MainLayOut.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayOut />,
    children: [
      {
        path:'/',
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/bookmarks',
        element: <BookMarks />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
