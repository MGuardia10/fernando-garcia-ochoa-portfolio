import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { HeroProject, PreviousButton, NextButton } from '../components'
import { DescProject } from '../components/DescProject'

const ProjectPage = () => {
  const { projectName } = useParams()
  const project = projects.find(project => project.name === projectName)

  return (
    <div className='bg-slate-50 dark:bg-[#171818] animate-fadeIn'>
      {/* Hero Section */}
      <HeroProject project={project} />

      {/* description Section */}
      <DescProject project={project} />

      {/* Prev and Next Buttons */}
      <section className='pb-10 md:pb-20 flex justify-between m-auto w-5/6'>
        <PreviousButton projectName={projectName} />
        <NextButton projectName={projectName} />
      </section>
    </div>
  )
}

export default ProjectPage
