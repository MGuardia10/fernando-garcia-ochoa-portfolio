import { Hero, AboutMe, Workflow } from '../components'

export const HomePage = () => {
  return (
    <div className='bg-slate-50 dark:bg-[#171818]'>
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      {/* <Projects /> */}

      {/* Crossover Section */}
      {/* <Crossover /> */}

      {/* Workflow section */}
      <Workflow />
    </div>
  )
}
