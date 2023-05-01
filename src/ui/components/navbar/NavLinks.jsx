import { links } from '../../data/myLinks'
import { Link } from 'react-router-dom'
import { NavDropdown } from './NavDropdown'
import { useState } from 'react'

export const NavLinks = ({ setOpen }) => {
  const [heading, setHeading] = useState('')

  return (
    <>
      {
        links.map(({ name, url, idRef, submenu, sublinks }) => (
          <div key={name}>
            <li onClick={() => {
              const noClickableLinks = ['Proyectos', 'Crossover']
              if (!noClickableLinks.includes(name)) {
                const open = setOpen
                open()
              }
            }}
            >
              <div
                className='text-xl border-b dark:border-b-gray-400 text-left md:text-base md:cursor-pointer md:border-0 group'
                onClick={() => {
                  (heading !== name)
                    ? setHeading(name)
                    : setHeading('')
                }}
              >
                <Link to={url} className='w-full py-2 inline-block font-lato dark:text-white md:pl-5'>
                  {name}
                </Link>

                {/* Submenus */}
                {
                  submenu && <NavDropdown sublinks={sublinks} />
                }
              </div>
            </li>

            {/* Mobile Menus */}
            <div className={`${heading === name ? 'md:hidden' : 'hidden'}`}>
              {
                    sublinks?.map((slinks) => (
                      <Link
                        to={slinks.link}
                        key={slinks.name}
                        className='flex font-lato dark:text-white p-2'
                        onClick={setOpen}
                      >
                        {slinks.name}
                      </Link>
                    ))
                  }
            </div>
          </div>
        ))
      }

    </>
  )
}
