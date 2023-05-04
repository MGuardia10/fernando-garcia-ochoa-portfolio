/* eslint-disable no-undef */
import { useContext, useRef, useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../../../context/themeContext'

export const ThemeButton = () => {
  const isDark = document.documentElement.className === 'dark'
  const { setTheme } = useContext(ThemeContext)
  const [darkMode, setDarkMode] = useState(isDark)
  const toggleDarkMode = useRef(isDark)

  const onToggleDarkMode = () => {
    setDarkMode(!darkMode)
    toggleDarkMode.current = document.documentElement.classList.toggle('dark')
    if (toggleDarkMode.current) {
      localStorage.setItem('theme', 'dark')
      setTheme(localStorage.getItem('theme'))
    } else {
      localStorage.setItem('theme', '')
      setTheme(localStorage.getItem('theme'))
    }
  }

  return (
    <>
      <button
        aria-label='Theme Button'
        onClick={onToggleDarkMode}
        type='button'
        className='bg-gray-200 dark:bg-[#292C2F] md:bg-transparent md:dark:bg-transparent
        text-gray-800 dark:text-gray-100 md:hover:bg-gray-200 md:dark:hover:bg-[#292C2F]
        rounded-sm duration-200 px-4 md:p-3 md:mr-5 md:ml-2.5'
      >
        <BsMoonFill className={`w-5 h-5 md:w-4 md:h-4 ${(darkMode) ? 'hidden' : ''}`} />
        <BsSunFill className={`w-5 h-5 md:w-4 md:h-4 ${(darkMode) ? '' : 'hidden'}`} />
      </button>
    </>
  )
}
