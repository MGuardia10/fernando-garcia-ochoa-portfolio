import { Link } from 'react-router-dom'

export const DropdownSublinks = ({ name, link }) => {
  return (
    <Link
      to={link}
      className='text-sm font-lato text-gray-600 hover:font-bold duration-150 mx-2 py-1.5 border-b last:border-none'
    >
      {name}
    </Link>
  )
}
