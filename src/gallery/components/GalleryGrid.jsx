import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Viewer from 'react-viewer'

const GalleryGrid = ({ ImagesArr }) => {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  const handleOnclickImg = (newIndex) => {
    setVisible(true)
    setIndex(newIndex)
  }

  return (
    <>
      <div className='columns-2 xs:columns-3 md:columns-4 w-5/6 md:w-11/12 mx-auto gap-1.5 space-y-1.5 pb-28'>
        {
          ImagesArr.map((img, index) => (
            <div key={index} className='bg-slate-200 dark:bg-[#292b2b] break-inside-avoid cursor-pointer'>
              <LazyLoadImage
                onClick={() => handleOnclickImg(index)}
                className='animate__animated animate__fadeIn'
                src={img.src}
                alt={img.alt}
              />
            </div>
          ))
      }
        <Viewer
          visible={visible}
          activeIndex={index}
          onClose={() => { setVisible(false) }}
          images={ImagesArr}
          rotatable={false}
          attribute={false}
          drag={false}
          noNavbar
          scalable={false}
        />
      </div>

    </>
  )
}

export default GalleryGrid
