/* eslint-disable no-undef */
import { useEffect, useState } from 'react'

export const useLocalStorage = (name) => {
  const [isLike, setisLike] = useState(localStorage.getItem(name))

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

  return {
    isLike,
    onClickLikeButton
  }
}
