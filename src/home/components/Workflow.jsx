import { useTranslation } from 'react-i18next'

export const Workflow = () => {
  const { t } = useTranslation(['workflow'])

  return (
    <section className='py-5 md:py-14 bg-slate-50 dark:bg-[#171818]'>
      <div className='w-5/6 m-auto md:w-full md:flex md:justify-between gap-x-5'>
        <div className='md:w-1/2 m-auto md:flex md:flex-col '>
          <div className='mb-8 m-auto md:mb-0 md:w-5/6 xl:w-4/6'>

            <h3 className='font-serif text-left text-xl uppercase dark:text-white'>
              {t('subtitle')}
            </h3>

            <p className='my-3 font-lato text-lg md:text-base xl:text-lg dark:text-gray-400'>
              {t('intro')}
            </p>

            <ol className='font-lato text-lg md:text-base xl:text-lg pl-2 dark:text-gray-400'>
              <li className='mb-2'>
                {t('li-1')}
              </li>
              <li className='mb-2'>
                {t('li-2')}
              </li>
              <li className='mb-2'>
                {t('li-3')}
              </li>
              <li className='mb-2'>
                {t('li-4')}
              </li>
            </ol>

          </div>
        </div>

        <div className='flex md:w-1/2 md:m-auto'>
          <img
            src='/images/crossoverGrid/project6.webp'
            alt='interior proyecto Yogijen Poketto'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
