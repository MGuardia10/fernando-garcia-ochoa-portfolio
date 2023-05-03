import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar, Footer } from '../../ui/components'
import { ThemeProvider } from '../../context/themeProvider'

export const HomeRoutes = () => {
  return (
    <ThemeProvider>
      <main>
        <ScrollRestoration />
        <Navbar />
        <div className='min-h-screen bg-slate-50 dark:bg-[#171818]'>
          <Outlet />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
