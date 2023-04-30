import { TfiLinkedin } from 'react-icons/tfi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
export const socialsFooter = [
  {
    link: 'https://www.linkedin.com/in/fernando-garc%C3%ADa-ochoa-ruedas-026838244',
    icon: <TfiLinkedin className='text-white h-8 w-8 md:h-6 md:w-6' />
  },
  {
    link: 'https://instagram.com/fg_8a?igshid=ZDdkNTZiNTM=',
    icon: <AiOutlineInstagram className='text-white h-8 w-8 md:h-6 md:w-6' />
  },
  {
    link: 'mailto:garciaochoaf@gmail.com',
    icon: <MdEmail className='text-white h-8 w-8 md:h-6 md:w-6' />
  }
]

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <section className='font-lato bg-black flex '>
      <div className='w-5/6 m-auto md:w-11/12 md:flex md:flex-row-reverse md:justify-between '>
        <div className='flex place-items-center justify-center m-8 gap-8'>
          {
            socialsFooter.map((social, index) => (
              <a href={social.link} key={index} className='p-2.5 bg-[#292C2F] duration-200 hover:bg-[#4d5052] rounded-sm'>
                {social.icon}
              </a>
            ))
            }

        </div>

        <hr className='rounded-full md:hidden' />

        <div className='text-white m-8 flex flex-col place-items-center justify-center md:place-items-start'>
          <h3 className='font-bold'>All Rights Reserved.</h3>
          <p className=''>F8a Arquitecture @{year}</p>
        </div>
      </div>
    </section>
  )
}
