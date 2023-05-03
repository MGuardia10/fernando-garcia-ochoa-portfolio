import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
