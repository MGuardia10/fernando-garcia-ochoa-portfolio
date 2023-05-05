
export const ProjectItems = ({ t, projectItems }) => {
  return (
    <>
      {
      projectItems.map((item, index) => (
        <div
          key={index}
          className='mt-3 pb-1 flex justify-between border-b border-b-black dark:border-b-white'
        >
          <span className='text-left font-bold'>
            {t(item[0])}
          </span>
          <span className='text-right'>
            {t(item[1])}
          </span>
        </div>
      ))
    }
    </>
  )
}
