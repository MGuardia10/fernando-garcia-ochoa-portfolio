import { useTranslation } from 'react-i18next'
import { ProjectItems } from './ProjectItems'

export const HeroProject = ({ project }) => {
  const { name, firstImgSrc, projectItems } = project
  const { t } = useTranslation([name])

  return (
    <section className='relative w-full flex flex-col -mt-[4.9rem] md:h-screen md:-mt-16 md:flex-row bg-slate-50 dark:bg-[#171818]'>
      <div className='hidden md:flex md:w-7/12'>
        <img
          className='object-cover animate__animated animate__fadeIn'
          src={firstImgSrc}
          alt='maqueta Casa Citrohan'
        />
      </div>
      <div className='md:w-5/12 md:mt-0 flex flex-col justify-center place-items-center w-5/6 m-auto h-screen'>
        <div className='w-7/12'>
          <h1 className='text-left uppercase font-BASKVILL text-3xl md:text-3xl dark:text-white animate__animated animate__fadeIn'>
            {t('title')}
          </h1>
          <div className='flex flex-col font-lato mt-8 text-center dark:text-gray-300 w-full animate__animated animate__fadeIn'>
            <ProjectItems t={t} projectItems={projectItems} />
          </div>

        </div>
      </div>
    </section>
  )
}
