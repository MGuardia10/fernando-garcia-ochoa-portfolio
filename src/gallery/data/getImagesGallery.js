export const getImagesGallery = () => {
  const ImagesArr = []
  for (let i = 1; i <= 53; i++) {
    ImagesArr.push({
      src: `/images/gallery/gallery${i}.webp`,
      alt: `Img ${i}`
    })
  }

  return ImagesArr
}
