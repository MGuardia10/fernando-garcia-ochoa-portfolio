import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export const Slider = ({ name, secondImgSrc }) => {
  return (
    <Carousel
      ariaLabel={`carrusel ${name}`}
      autoPlay
      stopOnHover
      infiniteLoop
      showThumbs={false}
      width={400}
    >
      {
        secondImgSrc.map((img, index) => (
          <div key={index} className='h-[525px]'>
            <img
              className='object-cover'
              src={img}
              alt={name}
            />
          </div>
        ))
      }
    </Carousel>
  )
}
