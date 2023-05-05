import { useTranslation } from 'react-i18next'
import { ProjectItems } from './ProjectItems'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'

export const HeroProject = ({ project }) => {
  const { name, firstImgSrc, alternativeImgSrc, projectItems } = project
  const { t } = useTranslation([name])
  const { theme } = useContext(ThemeContext)

  return (
    <section className='relative w-full flex flex-col md:h-screen md:-mt-16 md:flex-row bg-slate-50 dark:bg-[#171818]'>
      <div className='w-full flex md:w-7/12'>
        <img
          className='dark:bg-black object-cover animate-fadeIn'
          src={(name === '004_bacarnal' && theme === 'dark')
            ? alternativeImgSrc
            : firstImgSrc}
          alt={name}
        />
      </div>
      <div className='flex flex-col justify-center place-items-center w-11/12 mt-10 md:w-5/12 md:mt-0  m-auto md:h-screen'>
        <div className='w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12'>
          <h1 className='text-left uppercase font-BASKVILL text-3xl dark:text-white animate-fadeIn'>
            {t('title')}
          </h1>
          <div className='flex flex-col font-lato mt-3 md:mt-8 text-center dark:text-gray-300 w-full animate-fadeIn'>
            <ProjectItems t={t} projectItems={projectItems} />
          </div>

        </div>
      </div>
    </section>
  )
}
