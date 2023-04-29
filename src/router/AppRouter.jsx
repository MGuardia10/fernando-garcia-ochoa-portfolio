import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GalleryPage } from '../gallery/pages/GalleryPage'
import { ProjectPage } from '../projects/pages/ProjectPage'
import { HomeRoutes } from '../home/routes/HomeRoutes'
import { HomePage } from '../home/pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoutes />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'projects/:projectName',
        element: <ProjectPage />
      },
      {
        path: 'gallery',
        element: <GalleryPage />
      }
    ]
  }
])

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
