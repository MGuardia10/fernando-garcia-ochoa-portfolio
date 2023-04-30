import ImgAboutMe from '../../assets/home/aboutme.jpg'

export const AboutMe = () => {
  return (
    <section className='my-15 md:my-20'>
      <h2 className='w-5/6 m-auto font-serif text-left text-2xl uppercase my-10 md:w-11/12 md:text-4xl xl:text-5xl'>Sobre Mi</h2>
      <div className='flex flex-col m-auto mb-8 w-5/6 md:w-full md:flex-row md: md:justify-center md:place-items-center md:gap-x-5'>
        <div className='mb-5 md:w-1/2 md:m-auto'>
          <img
            src={ImgAboutMe}
            alt='foto de Fernando Garcia-Ochoa'
            className='object-cover'
          />
        </div>
        <div className='md:w-1/2'>
          <div className='md:w-5/6 md:m-auto xl:w-4/6'>
            <h3 className='font-serif text-left text-xl uppercase xl:text-2xl'>¿Quién soy?</h3>
            <p className='mt-3 font-lato text-lg md:text-base xl:text-lg'>
              Soy un estudiante de arquitectura especializado en modelado 3D y representación arquitectónica.
              Con amplios conocimientos en los principales softwares de diseño 3D, BIM, renderizado y postproducción.
            </p>
            <p className='mt-2 font-lato text-lg'>Destaco mi versatilidad a la hora de afrontar nuevos retos y rápido aprendizaje.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
