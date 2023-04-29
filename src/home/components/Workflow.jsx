import ImgWorkflow from '../../assets/home/workflow.jpg'

export const Workflow = () => {
  return (
    <section>
      <div className='w-5/6 m-auto mb-10'>
        <div>
          <h3 className='font-serif text-left text-xl uppercase'>Workflow</h3>
          <p className='my-3 font-lato text-lg'>
            Se realiza una reunión con el cliente para acordar el encargo y las condiciones del encargo.
            Generalmente consiste de las siguientes fases:
          </p>
          <ol className='pl-2 mb-5'>
            <li className='font-lato text-lg mb-2'>
              1- Diseño: Se toma el diseño del cliente o se realizado mano a mano con él.
            </li>
            <li className='font-lato text-lg mb-2'>
              2- Dibujo 2D: Se realizan los planos necesarios para la ejecución del modelado poligonal.
            </li>
            <li className='font-lato text-lg mb-2'>
              3- Modelado 3D: Se realiza el modelado poligonal.
            </li>
            <li className='font-lato text-lg mb-2'>
              4- Renderizado y postproducción: Se crean imágenes a partir del modelo 3D. Para ello se tiene en cuenta la idea que se quiere transmitir y el estilo del proyecto.
            </li>
          </ol>
        </div>

        <div>
          <img src={ImgWorkflow} alt='interior proyecto Yogijen Poketto' />
        </div>

      </div>
    </section>
  )
}
