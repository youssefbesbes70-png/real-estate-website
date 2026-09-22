import {
  useEffect,
  useState,
} from "react"

import { useTranslation } from "react-i18next"

type ProjectHeroSliderProps = {
  title: string
  projectImages: string[]
}

function optimizeImage(
  imageUrl: string,
  width: number
) {
  if (!imageUrl) {
    return ""
  }

  if (
    imageUrl.includes(
      "/image/upload/"
    )
  ) {
    return imageUrl.replace(
      "/image/upload/",
      `/image/upload/f_auto,q_auto,w_${width},c_limit/`
    )
  }

  return imageUrl
}

function ProjectHeroSlider({
  title,
  projectImages,
}: ProjectHeroSliderProps) {
  const { t } = useTranslation()

  const [
    currentImageIndex,
    setCurrentImageIndex,
  ] = useState(0)

  if (
    !projectImages ||
    projectImages.length === 0
  ) {
    return null
  }

  const currentImage =
    projectImages[
      currentImageIndex
    ]

  const optimized800 =
    optimizeImage(
      currentImage,
      800
    )

  const optimized1200 =
    optimizeImage(
      currentImage,
      1200
    )

  const optimized1600 =
    optimizeImage(
      currentImage,
      1600
    )

  const goToPreviousImage =
    () => {
      setCurrentImageIndex(
        (current) =>
          current === 0
            ? projectImages.length -
              1
            : current - 1
      )
    }

  const goToNextImage = () => {
    setCurrentImageIndex(
      (current) =>
        current ===
        projectImages.length - 1
          ? 0
          : current + 1
    )
  }

  useEffect(() => {
    if (
      projectImages.length <= 1
    ) {
      return
    }

    const nextIndex =
      currentImageIndex ===
      projectImages.length - 1
        ? 0
        : currentImageIndex + 1

    const nextImage =
      new Image()

    nextImage.src =
      optimizeImage(
        projectImages[
          nextIndex
        ],
        1600
      )
  }, [
    currentImageIndex,
    projectImages,
  ])

  return (
    <div className="image-slider">
      {projectImages.length >
        1 && (
        <button
          className="slider-button left"
          onClick={
            goToPreviousImage
          }
          aria-label={t(
            "projectDetails.previousImage"
          )}
        >
          ←
        </button>
      )}

      <img
        className="project-details-image"
        src={optimized1600}
        srcSet={`
          ${optimized800} 800w,
          ${optimized1200} 1200w,
          ${optimized1600} 1600w
        `}
        sizes="100vw"
        alt={`${title} exterior ${
          currentImageIndex + 1
        }`}
        loading={
          currentImageIndex === 0
            ? "eager"
            : "lazy"
        }
        decoding="async"
      />

      {projectImages.length >
        1 && (
        <button
          className="slider-button right"
          onClick={
            goToNextImage
          }
          aria-label={t(
            "projectDetails.nextImage"
          )}
        >
          →
        </button>
      )}
    </div>
  )
}

export default ProjectHeroSlider