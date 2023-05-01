import { useTranslation } from 'react-i18next'
import CVfernando from '../../../assets/cv_fernando.pdf'

export const CVButton = () => {
  const { t } = useTranslation(['cv-button'])
  return (

    <a
      href={CVfernando}
      target='_blank'
      className='bg-gray-100 hover:bg-gray-200 text-gray-900 dark:text-white dark:bg-[#292C2F] dark:hover:bg-[#4d5052] duration-200 rounded-sm mt-6 px-4 py-2.5 font-lato inline-flex items-center'
      rel='noreferrer'
    >
      <svg className='fill-current w-3 h-3 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' /></svg>
      <span>{t('cv-button')}</span>
    </a>
  )
}
