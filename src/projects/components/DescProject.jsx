import { useTranslation } from 'react-i18next'
import { Slider } from './Slider'

export const DescProject = ({ project }) => {
  const { name, secondImgSrc } = project
  const { t } = useTranslation([name])

  return (
    <section className='mt-20 md:py-14 bg-slate-50 dark:bg-[#171818] animate-fadeIn'>
      <div className='w-5/6 m-auto md:w-11/12'>
        <div className='flex flex-col md:flex-row md:justify-around gap-x-5'>
          <div className='md:w-5/12 font-lato text-lg dark:text-white flex flex-col justify-center'>
            <h3 className='font-BASKVILL uppercase font-bold mb-8'>{t('subtitle')}</h3>
            <p className='mb-5 dark:text-gray-400'>{t('p-1')}</p>
            <p className='dark:text-gray-400'>{t('p-2')}</p>
          </div>
          <div className='flex justify-center my-10 overflow-hidden md:w-5/12 md:h-[525px] md:justify-end'>
            {
                (typeof secondImgSrc === 'object')
                  ? <Slider name={name} secondImgSrc={secondImgSrc} />
                  : <img
                      className='object-cover'
                      src={secondImgSrc}
                      alt={name}
                    />
            }
          </div>
        </div>
      </div>
    </section>
  )
}
