import ImgAboutMe from '../../assets/home/aboutme.jpg'

export const AboutMe = () => {
  return (
    <section>
      <div className='flex flex-col w-5/6 m-auto mb-8'>
        <h2 className='font-serif text-left text-2xl uppercase mb-5'>Sobre Mi</h2>
        <div className='mb-5'>
          <img src={ImgAboutMe} alt='Fernando' />
        </div>
        <h3 className='font-serif text-left text-xl uppercase'>¿Quién soy?</h3>
        <p className='mt-3 font-lato text-lg'>
          Soy un estudiante de arquitectura especializado en modelado 3D y representación arquitectónica.
          Con amplios conocimientos en los principales softwares de diseño 3D, BIM, renderizado y postproducción.
        </p>
        <p className='mt-2 font-lato text-lg'>Destaco mi versatilidad a la hora de afrontar nuevos retos y rápido aprendizaje.</p>
      </div>
    </section>
  )
}
