import ImgWorkflow from '../../assets/home/workflow.jpg'

export const Workflow = () => {
  return (
    <section className='my-20'>
      <div className='w-5/6 m-auto md:w-full md:flex md:justify-between gap-x-5'>
        <div className='md:w-1/2 m-auto md:flex md:flex-col'>
          <div className='mb-5 m-auto md:mb-0 md:w-5/6 xl:w-4/6'>
            <h3 className='font-serif text-left text-xl uppercase'>Workflow</h3>
            <p className='my-3 font-lato text-lg md:text-base xl:text-lg'>
              Generalmente consiste de las siguientes fases:
            </p>
            <ol className='font-lato text-lg md:text-base xl:text-lg pl-2'>
              <li className='mb-2'>
                1. Diseño: Se toma el diseño del cliente o se realizado mano a mano con él.
              </li>
              <li className='mb-2'>
                2. Dibujo 2D: Se realizan los planos necesarios para la ejecución del modelado poligonal.
              </li>
              <li className='mb-2'>
                3. Modelado 3D: Se realiza el modelado poligonal.
              </li>
              <li className='mb-2'>
                4. Renderizado y postproducción: Se crean imágenes a partir del modelo 3D. Para ello se tiene en cuenta la idea que se quiere transmitir y el estilo del proyecto.
              </li>
            </ol>
          </div>
        </div>

        <div className='md:w-1/2 md:m-auto'>
          <img
            src={ImgWorkflow}
            alt='interior proyecto Yogijen Poketto'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
