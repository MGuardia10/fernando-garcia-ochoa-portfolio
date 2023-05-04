import { useTranslation } from 'react-i18next'
import { CVButton } from '../../ui/components/navbar/CVButton'
import { TbLocationFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const AboutMe = () => {
  const { t } = useTranslation(['aboutMe'])

  return (
    <section className='md:py-20 bg-slate-50 dark:bg-[#171818]'>
      <h2 className='w-5/6 m-auto font-BASKVILL text-left text-2xl uppercase py-5 md:my-10 md:w-11/12 md:text-4xl xl:text-5xl dark:text-white'>{t('title')}</h2>
      <div className='flex flex-col m-auto mb-8 w-5/6 md:w-full md:flex-row md: md:justify-center md:place-items-center md:gap-x-5'>
        <div className='mb-5 md:w-1/2 md:m-auto'>
          <img
            src='/images/home/aboutme.webp'
            alt='foto de Fernando Garcia-Ochoa'
            className='object-cover'
          />
        </div>
        <div className='md:w-1/2'>
          <div className='md:w-5/6 md:m-auto xl:w-4/6'>
            <h3 className='font-serif text-left text-xl uppercase xl:text-2xl dark:text-white'>{t('subtitle')}</h3>
            <p className='mt-3 font-lato text-lg md:text-base xl:text-lg dark:text-gray-400'>
              {t('first-paragraph')}
            </p>
            <p className='mt-2 font-lato text-lg dark:text-gray-400'>
              {t('second-paragraph')}
            </p>

            <div className='flex mt-6 gap-3'>
              <CVButton />
              <Link
                to='/gallery'
                preventScrollReset={false}
                className='bg-gray-100 hover:bg-gray-200 text-gray-900 dark:text-white dark:bg-[#292C2F] dark:hover:bg-[#4d5052] text-sm md:text-base duration-200 rounded-sm px-4 font-lato inline-flex items-center'
              >
                <TbLocationFilled className='mr-2' />
                <span>{t('gallery-button')}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
