import { useTranslation } from 'react-i18next'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export const PreviousButton = ({ projectName }) => {
  const { t } = useTranslation(['previous'])

  const projectIndex = projects.findIndex(project => projectName === project.name)

  return (
    <Link
      to={(projectIndex === 0)
        ? '/projects/007_casa_citrohan'
        : `/projects/${projects[projectIndex - 1].name}`}
      preventScrollReset={false}
      className='bg-gray-100 hover:bg-gray-200 text-gray-900 dark:text-white dark:bg-[#292C2F] dark:hover:bg-[#4d5052] text-sm md:text-base duration-200 rounded-sm px-6 py-3 md:-ml-3 font-lato inline-flex items-center'
    >
      <BsArrowLeftShort className='w-5 h-5 mr-2' />
      <span>{t('previous')}</span>
    </Link>
  )
}
