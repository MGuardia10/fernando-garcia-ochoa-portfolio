
export const ProjectItems = ({ t, projectItems }) => {
  return (
    <>
      {
      projectItems.map((item, index) => (
        <div
          key={index}
          className='mt-3 pb-1 flex justify-between border-b border-b-black dark:border-b-white'
        >
          <span className='font-bold'>
            {t(item[0])}
          </span>
          <span>
            {t(item[1])}
          </span>
        </div>
      ))
    }
    </>
  )
}
