import { useTranslation } from 'react-i18next'
import { socialsFooter } from '../../data'

export const Footer = () => {
  const { t } = useTranslation(['footer'])
  const year = new Date().getFullYear()
  return (
    <section className='font-lato bg-[#171818] dark:bg-[#1b1c1c] flex'>
      <div className='w-5/6 m-auto md:w-11/12 md:flex md:flex-row-reverse md:justify-between '>
        <div className='flex place-items-center justify-center m-8 gap-8'>
          {
            socialsFooter.map((social, index) => (
              <a
                key={index}
                aria-label='Social media'
                href={social.link}
                className='p-4 bg-[#292C2F] duration-200 hover:bg-[#4d5052] rounded-sm'
              >
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
