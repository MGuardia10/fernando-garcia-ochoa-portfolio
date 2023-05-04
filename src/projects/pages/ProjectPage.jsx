// import { useTranslation } from 'react-i18next'

import { useParams } from 'react-router-dom'
import { HeroProject } from '../components/HeroProject'
import { projects } from '../data/projects'

const ProjectPage = () => {
  const { projectName } = useParams()
  const project = projects.find(project => project.name === projectName)

  return (
    <div className='bg-slate-50 dark:bg-[#171818]'>
      {/* Hero Section */}
      <HeroProject project={project} />

    </div>
  )
}

export default ProjectPage
