import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Spiner } from '../ui/components'
import { HomeRoutes } from '../home/routes/HomeRoutes'

const HomePage = lazy(() => import('../home/pages/HomePage'))
const ProjectPage = lazy(() => import('../projects/pages/ProjectPage'))
const GalleryPage = lazy(() => import('../gallery/pages/GalleryPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoutes />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<Spiner />}><HomePage /></Suspense>
      },
      {
        path: 'projects/:projectName',
        element: <Suspense fallback={<Spiner />}><ProjectPage /></Suspense>
      },
      {
        path: 'gallery',
        element: <Suspense fallback={<Spiner />}><GalleryPage /></Suspense>
      }
    ]
  }

])
