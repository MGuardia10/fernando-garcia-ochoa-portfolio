/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { TbLocationFilled } from 'react-icons/tb'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

export const GridProjects = ({ name, alt, imgLink, link, gridClass }) => {
  const { t } = useTranslation([name])

  const [isLike, setisLike] = useState(localStorage.getItem(name))
  const [open, setopen] = useState(false)

  const onClickLikeButton = () => {
    setisLike(!isLike)
  }

  useEffect(() => {
    if (isLike) {
      localStorage.setItem(name, isLike)
    } else {
      localStorage.removeItem(name)
    }
  }, [isLike])

  const handleOpenModalMobile = () => {
    setopen(!open)
  }

  return (
    <div
      className={`border border-gray-200 dark:border-gray-900 relative flex overflow-hidden group ${gridClass}`}
    >
      <img onClick={handleOpenModalMobile} className='object-cover w-full' src={imgLink} alt={alt} />

      <div
        className={`absolute bottom-0 md:block md:h-0 w-full md:opacity-0 duration-300
                    md:group-hover:h-full md:group-hover:opacity-100
                    bg-black bg-opacity-80
                    ${(open) ? 'h-full opacity-100' : 'h-0 opacity-0 hidden'}`}
      >
        <div className='h-full flex flex-col justify-end p-5 lg:p-10'>

          <RxCross1
            onClick={handleOpenModalMobile}
            className='absolute top-0 right-0 w-11 h-11 pr-5 pt-5 md:hidden cursor-pointer text-white'
          />

          <h3 className='text-white font-bold uppercase font-BASKVILL lg:text-xl mb-3'>
            {t('title')}
          </h3>

          <p className='text-gray-200 font-lato  text-sm lg:text-base'>
            {t('short-desc')}
          </p>

          <div className='flex flex-row mt-5'>
            <Link
              to={link}
              className='bg-[#292C2F] text-white hover:bg-[#4d5052] duration-200 rounded-sm px-4 py-2.5 font-lato inline-flex items-center'
            >
              <TbLocationFilled className='text-white w-3 h-3 mr-2 xl:w-4 xl:h-3' />
              <span className='text-sm xl:text-base'>{t('button-grid')}</span>
            </Link>

            <button onClick={onClickLikeButton} className='ml-5'>
              {
                    (isLike)
                      ? <AiFillHeart className='text-red-500 w-6 h-6' />
                      : <AiOutlineHeart className='text-gray-400 hover:text-white duration-200 w-6 h-6' />
                    }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
