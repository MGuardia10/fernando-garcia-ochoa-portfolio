import { CiInstagram, CiLinkedin } from 'react-icons/ci'
import CVfernando from '../../../assets/cv_fernando.pdf'
import { BsFiletypePdf } from 'react-icons/bs'

const socialsNavbar = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fernando-garc%C3%ADa-ochoa-ruedas-026838244',
    icon: <CiLinkedin className='text-2xl text-gray-900 mx-1' />
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/fg_8a?igshid=ZDdkNTZiNTM=',
    icon: <CiInstagram className='text-2xl text-gray-900 mx-1' />
  },

  {
    name: 'Download CV',
    link: CVfernando,
    icon: <BsFiletypePdf className='text-2xl text-gray-900 mx-1' />
  }
]

export const Socials = ({ setOpen }) => {
  return (
    <div className='md:hidden'>
      {
        socialsNavbar.map(social => (
          <a
            key={social.name}
            href={social.link}
            target='_blank'
            className='flex flex-row justify-between place-items-center py-3 border-b'
            onClick={setOpen} rel='noreferrer'
          >
            <span className='font-lato text-lg'>{social.name}</span>
            {social.icon}
          </a>
        ))
      }
    </div>
  )
}
