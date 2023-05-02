import { projectsHomeGrid } from '../data'
import { GridProjects } from './GridProjects'

export const Projects = () => {
  return (
    <section className='bg-slate-50 dark:bg-[#171818] my-10'>
      <h2 className='w-5/6 m-auto font-BASKVILL text-left text-2xl uppercase py-5 md:py-10 md:w-11/12 md:text-4xl xl:text-5xl dark:text-white'>
        Projects
      </h2>

      <div className='relative w-5/6 md:w-11/12 m-auto grid sm:grid-cols-2 md:grid-cols-7 gap-5'>
        {
          projectsHomeGrid.map(({ name, alt, imgLink, link, gridClass }) => (
            <GridProjects key={name} name={name} alt={alt} link={link} gridClass={gridClass} imgLink={imgLink} />
          ))
        }
      </div>
    </section>
  )
}
