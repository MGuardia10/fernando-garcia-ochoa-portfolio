import { useState } from 'react'
import { ThemeContext } from './themeContext'

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(document.documentElement.className)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
