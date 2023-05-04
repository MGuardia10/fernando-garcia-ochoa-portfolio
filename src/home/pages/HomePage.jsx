import { Hero, AboutMe, Workflow, Projects, Crossover } from '../components'

const HomePage = () => {
  return (
    <div className='bg-slate-50 dark:bg-[#171818]'>
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Workflow section */}
      <Workflow />

      {/* Projects Section */}
      <Projects />

      {/* Crossover Section */}
      <Crossover />

    </div>
  )
}

export default HomePage
