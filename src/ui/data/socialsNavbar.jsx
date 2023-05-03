import { CiInstagram, CiLinkedin } from 'react-icons/ci'
import CVfernando from '../../assets/cv_fernando.pdf'
import { BsFiletypePdf } from 'react-icons/bs'

export const socialsNavbar = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fernando-garc%C3%ADa-ochoa-ruedas-026838244',
    icon: <CiLinkedin className='text-2xl text-gray-900 dark:text-white mx-1' />
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/fg_8a?igshid=ZDdkNTZiNTM=',
    icon: <CiInstagram className='text-2xl text-gray-900 dark:text-white mx-1' />
  },

  {
    name: 'Download CV',
    link: CVfernando,
    icon: <BsFiletypePdf className='text-2xl text-gray-900 dark:text-white mx-1' />
  }
]
