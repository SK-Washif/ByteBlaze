import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx'
import MainLayOut from './layouts/MainLayOut.jsx'
import Blog from './pages/Blog.jsx'
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
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blog/:id',
        element: <Blog />,

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
