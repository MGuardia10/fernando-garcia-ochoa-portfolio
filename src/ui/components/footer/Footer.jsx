import { TfiLinkedin } from 'react-icons/tfi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
export const socialsFooter = [
  {
    link: 'https://www.linkedin.com/in/fernando-garc%C3%ADa-ochoa-ruedas-026838244',
    icon: <TfiLinkedin className='text-white h-6 w-6 md:h-5 md:w-5' />
  },
  {
    link: 'https://instagram.com/fg_8a?igshid=ZDdkNTZiNTM=',
    icon: <AiOutlineInstagram className='text-white h-6 w-6 md:h-5 md:w-5' />
  },
  {
    link: 'mailto:garciaochoaf@gmail.com',
    icon: <MdEmail className='text-white h-6 w-6 md:h-5 md:w-5' />
  }
]

export const Footer = () => {
  const { t } = useTranslation(['footer'])
  const year = new Date().getFullYear()
  return (
    <section className='font-lato bg-[#171818] dark:bg-[#1b1c1c] flex '>
      <div className='w-5/6 m-auto md:w-11/12 md:flex md:flex-row-reverse md:justify-between '>
        <div className='flex place-items-center justify-center m-8 gap-8'>
          {
            socialsFooter.map((social, index) => (
              <a href={social.link} key={index} className='p-4 bg-[#292C2F] duration-200 hover:bg-[#4d5052] rounded-sm'>
                {social.icon}
              </a>
            ))
            }

        </div>

        <hr className='rounded-full md:hidden' />

        <div className='text-white font-lato m-8 flex flex-col place-items-center justify-center md:place-items-start'>
          <h3 className='font-bold '> {t('rights')}</h3>
          <p>F8a Arquitecture @{year}</p>
        </div>
      </div>
    </section>
  )
}
