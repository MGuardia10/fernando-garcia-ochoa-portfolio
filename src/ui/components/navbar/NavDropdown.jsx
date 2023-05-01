import { DropdownSublinks } from './DropdownSublinks'

export const NavDropdown = ({ sublinks }) => {
  return (
    <div>
      <div className='absolute mt-[-5px] hidden group-hover:md:block hover:md:block'>
        <div className='py-3'>
          <div className='w-4 h-4 left-12 absolute mt-1
              bg-white dark:bg-[#171818] rotate-45 border-t border-l border-gray-400 dark:border-gray-700'
          />
        </div>
        <div className='bg-white dark:bg-[#171818] border border-gray-400 dark:border-gray-700 px-2 grid grid-cols-1'>
          {
                sublinks.map(({ name, link }) => (
                  <DropdownSublinks key={name} name={name} link={link} />
                ))
            }
        </div>
      </div>
    </div>
  )
}
