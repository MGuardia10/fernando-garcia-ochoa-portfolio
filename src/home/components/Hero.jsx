import { useContext } from 'react'
import BlackLogo from '../../assets/home/logo_negro.webp'
import WhiteLogo from '../../assets/home/logo_blanco2.png'
import ImgHome from '../../assets/home/maqueta_home.webp'
import { ThemeContext } from '../../context/themeContext'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation(['hero'])

  return (
    <section className='relative w-full flex flex-col -mt-[4.9rem] md:h-screen md:-mt-16 md:flex-row bg-slate-50 dark:bg-[#171818] animate__animated animate__fadeIn'>
      <div className='md:w-6/12 md:mt-0 flex flex-col place-items-center justify-center w-5/6 m-auto h-screen '>
        {
          (theme === 'dark')
            ? <img src={WhiteLogo} className='w-[170px] h-[233px]' />
            : <img src={BlackLogo} className='w-[170px] h-[233px]' />
        }

        <h1 className='uppercase font-BASKVILL text-3xl md:text-4xl xl:text-6xl dark:text-white'>Arquitecture</h1>
        <p className='font-lato mt-5 text-center dark:text-gray-300'>{t('subtitle')}</p>
      </div>
      <div className='hidden md:flex md:w-6/12 relative'>
        <img
          className='h-full w-full object-cover'
          src={ImgHome}
          alt='maqueta Casa Citrohan'
        />
      </div>
    </section>
  )
}
