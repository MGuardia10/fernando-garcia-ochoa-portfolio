import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../../ui/components'
import { ThemeProvider } from '../../context/themeProvider'

export const HomeRoutes = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}
