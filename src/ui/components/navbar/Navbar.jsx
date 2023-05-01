import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { Socials } from './Socials'
import { ThemeButton } from './ThemeButton'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='bg-slate-100 dark:bg-[#1b1c1c] sticky top-0 z-50 shadow-md'>
      <nav>
        <div className='w-5/6 m-auto py-5 flex items-center font-medium justify-between md:w-11/12 md:py-4'>
          <div className='z-40 md:w-auto w-full flex justify-between items-center py-1'>
            <Link to='/' className='font-BASKVILL dark:text-white md:text-xl cursor-pointer text-base'>Fernando García-Ochoa</Link>

            <div className='text-2xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
              {
                    (open)
                      ? <RxCross1 className='text-black text-2xl dark:text-white' />
                      : <RxHamburgerMenu className='text-black text-2xl dark:text-white' />
                }
            </div>
          </div>
          <ul className='md:flex hidden uppercase items-center dark:text-white'>
            <ThemeButton />
            <NavLinks setOpen={() => setOpen(!open)} />
          </ul>

          {/* Mobile */}
          <ul
            className={`
                bg-white dark:bg-[#1b1c1c] md:hidden fixed w-full top-0 overflow-y-auto bottom-0 py-24
                duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                `}
          >
            <div className='w-11/12 p-5 m-auto'>
              <NavLinks setOpen={() => setOpen(!open)} />
              <Socials setOpen={() => setOpen(!open)} />
              <div className='flex justify-start pt-10 gap-x-10'>
                <ThemeButton />
                <ThemeButton />
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}
