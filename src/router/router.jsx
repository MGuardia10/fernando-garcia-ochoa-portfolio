import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Spiner } from '../ui/components'
import { HomeRoutes } from '../home/routes/HomeRoutes'
import { HomePage } from '../home/pages/HomePage'
import { ProjectPage } from '../projects/pages/ProjectPage'
import { GalleryPage } from '../gallery/pages/GalleryPage'

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
