import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { HeroProject, PreviousButton, NextButton } from '../components'

const ProjectPage = () => {
  const { projectName } = useParams()

  const project = projects.find(project => project.name === projectName)

  return (
    <div className='bg-slate-50 dark:bg-[#171818]'>
      {/* Hero Section */}
      <HeroProject project={project} />
      <div className='py-20 flex justify-between m-auto w-5/6 md:w-11/12'>
        <PreviousButton projectName={projectName} />
        <NextButton projectName={projectName} />
      </div>
    </div>
  )
}

export default ProjectPage
