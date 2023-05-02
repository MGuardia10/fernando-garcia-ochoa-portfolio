import { useTranslation } from 'react-i18next'
import ImgAboutMe from '../../assets/home/aboutme.webp'
import { CVButton } from '../../ui/components/navbar/CVButton'

export const AboutMe = () => {
  const { t } = useTranslation(['aboutMe'])

  return (
    <section className='md:py-20 bg-slate-50 dark:bg-[#171818]'>
      <h2 className='w-5/6 m-auto font-BASKVILL text-left text-2xl uppercase py-5 md:my-10 md:w-11/12 md:text-4xl xl:text-5xl dark:text-white'>{t('title')}</h2>
      <div className='flex flex-col m-auto mb-8 w-5/6 md:w-full md:flex-row md: md:justify-center md:place-items-center md:gap-x-5'>
        <div className='mb-5 md:w-1/2 md:m-auto'>
          <img
            src={ImgAboutMe}
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
            <CVButton />
          </div>

        </div>
      </div>
    </section>
  )
}
