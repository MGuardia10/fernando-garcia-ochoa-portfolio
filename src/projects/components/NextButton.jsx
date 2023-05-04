import { useTranslation } from 'react-i18next'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export const NextButton = ({ projectName }) => {
  const { t } = useTranslation(['next'])
  const projectIndex = projects.findIndex(project => projectName === project.name)

  return (
    <Link
      to={(projectIndex === 6)
        ? '/projects/001_catalogo_domesticidad'
        : `/projects/${projects[projectIndex + 1].name}`}
      preventScrollReset={false}
      className='bg-gray-100 hover:bg-gray-200 text-gray-900 dark:text-white dark:bg-[#292C2F] dark:hover:bg-[#4d5052] text-sm md:text-base duration-200 rounded-sm px-4 py-2 font-lato inline-flex items-center'
    >
      <span>{t('next')}</span>
      <BsArrowRightShort className='w-5 h-5 ml-2' />
    </Link>
  )
}
