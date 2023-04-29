import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../../ui/components'

export const HomeRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
