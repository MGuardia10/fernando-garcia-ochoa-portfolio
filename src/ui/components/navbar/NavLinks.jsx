import { links } from '../../data/myLinks'
import { Link } from 'react-router-dom'
import { NavDropdown } from './NavDropdown'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NavLinks = ({ setOpen }) => {
  const [heading, setHeading] = useState('')
  const { i18n } = useTranslation()

  if (i18n.language === 'es') {
    links[0].name = 'Inicio'
    links[1].name = 'Proyectos'
    links[3].name = 'Galería'
  } else {
    links[0].name = 'Home'
    links[1].name = 'Projects'
    links[3].name = 'Gallery'
  }

  return (
    <>
      {
        links.map(({ name, url, submenu, sublinks }) => (
          <div key={name}>
            <li onClick={() => {
              const noClickableLinks = ['Projects', 'Proyectos', 'Crossover']
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
