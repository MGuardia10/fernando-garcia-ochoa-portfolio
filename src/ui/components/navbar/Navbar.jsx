import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { Button } from './Button'
import { Socials } from './Socials'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='bg-slate-50 sticky top-0 z-50 shadow-md'>
      <nav>
        <div className='md:py-4 flex items-center font-medium justify-between w-11/12 m-auto p-5'>
          <div className='z-40 md:w-auto w-full flex justify-between items-center py-1'>
            <Link to='/' className='font-serif md:text-lg cursor-pointer text-base'>Fernando García-Ochoa</Link>

            <div className='text-2xl md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
              {
                    (open)
                      ? <RxCross1 className='text-black text-2xl' />
                      : <RxHamburgerMenu className='text-black text-2xl' />
                }
            </div>
          </div>
          <ul className='md:flex hidden uppercase items-center'>
            <NavLinks setOpen={() => setOpen(!open)} />
            <div className='md:block hidden'>
              <Button />
            </div>
          </ul>

          {/* Mobile */}
          <ul
            className={`
                bg-white md:hidden fixed w-full top-0 overflow-y-auto bottom-0 py-24
                duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                `}
          >
            <div className='w-11/12 p-5 m-auto'>
              <NavLinks setOpen={() => setOpen(!open)} />
              <Socials setOpen={() => setOpen(!open)} />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}
