/* eslint-disable no-undef */
import { useTranslation } from 'react-i18next'

export const LanguageButton = () => {
  const { i18n } = useTranslation()

  const onChangeLanguage = () => {
    if (i18n.language === 'es') {
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'en')
    } else {
      i18n.changeLanguage('es')
      localStorage.setItem('lang', 'es')
    }
  }

  return (

    <>
      <button
        onClick={onChangeLanguage}
        type='button'
        className='bg-gray-200 dark:bg-[#292C2F] md:bg-transparent md:dark:bg-transparent
          text-gray-800 dark:text-gray-100 md:hover:bg-gray-200 md:dark:hover:bg-[#292C2F]
          rounded-sm duration-200 px-5 py-4 md:py-2 md:px-3'
      >
        <p className={`font-mono font-bold text-lg md:text-base text-center ${(i18n.language === 'es') ? '' : 'hidden'}`}>En</p>
        <p className={`font-mono font-bold text-lg md:text-base text-center ${(i18n.language === 'en') ? '' : 'hidden'}`}>Es</p>
      </button>
    </>
  )
}
