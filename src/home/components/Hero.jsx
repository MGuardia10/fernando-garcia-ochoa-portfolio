import LogoHome from '../../assets/home/logo_fernando.webp'
import ImgHome from '../../assets/home/maqueta_home.jpg'

export const Hero = () => {
  return (
    <section className='relative w-full flex flex-col -mt-[4.9rem] md:h-screen md:-mt-16 md:flex-row'>
      <div className='md:w-6/12 md:mt-0 flex flex-col place-items-center justify-center w-5/6 m-auto h-screen'>
        <img src={LogoHome} alt='logo' />
        <h1 className='uppercase font-serif text-3xl md:text-4xl xl:text-6xl'>Arquitecture</h1>
        <p className='font-lato mt-5 text-center'>Modelado 3D y Representación arquitectónica</p>
      </div>
      <div className='hidden md:flex md:w-6/12 relative'>
        <img
          className='h-full w-full object-cover'
          src={ImgHome}
          alt='maqueta Casa Citrohan'
        />
      </div>
    </section>
  )
}
