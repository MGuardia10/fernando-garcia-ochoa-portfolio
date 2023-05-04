
import { lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { getImagesGallery } from '../data/getImagesGallery'
const GalleryGrid = lazy(() => import('../components/GalleryGrid'))

const GalleryPage = () => {
  const imagesArr = getImagesGallery()
  const { t } = useTranslation(['gallery'])

  return (
    <>
      <div className='bg-slate-50 dark:bg-[#171818] animate__animated animate__fadeIn'>
        <h2 className='w-5/6 m-auto font-BASKVILL text-left text-2xl uppercase
            py-5 md:py-10 md:w-11/12 md:text-4xl xl:text-5xl dark:text-white'
        >
          {t('title')}
        </h2>

        <GalleryGrid ImagesArr={imagesArr} />

      </div>
    </>
  )
}

export default GalleryPage
