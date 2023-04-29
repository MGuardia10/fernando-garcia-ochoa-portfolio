import CVfernando from '../../../assets/cv_fernando.pdf'

export const Button = () => {
  return (

    <a
      href={CVfernando}
      target='_blank'
      className='bg-white hover:bg-gray-100 text-gray-800 md:ml-6 px-3 py-1 font-lato inline-flex items-center' rel='noreferrer'
    >
      <svg className='fill-current w-3 h-3 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' /></svg>
      <span>CV</span>
    </a>
  )
}
