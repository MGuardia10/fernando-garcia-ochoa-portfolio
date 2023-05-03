import { socialsNavbar } from '../../data'

export const Socials = ({ setOpen }) => {
  return (
    <div className='md:hidden'>
      {
        socialsNavbar.map(social => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            className='flex flex-row justify-between place-items-center py-3 border-b dark:border-b-gray-400'
            onClick={setOpen} rel='noreferrer'
          >
            <span className='font-lato text-lg dark:text-white'>{social.name}</span>
            {social.icon}
          </a>
        ))
      }
    </div>
  )
}
