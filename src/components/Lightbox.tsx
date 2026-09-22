import { useEffect } from "react"
import { useTranslation } from "react-i18next"

type ApartmentUnit = {
  type: string
  images: string[]
  plan: string
  available: boolean
  floor: string
  surface: string
}

type LightboxProps = {
  title: string
  apartment: ApartmentUnit
  imageIndex: number
  setImageIndex: (
    index: number
  ) => void
  onClose: () => void
}

function optimizeImage(
  imageUrl: string,
  width: number = 1600
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

function Lightbox({
  title,
  apartment,
  imageIndex,
  setImageIndex,
  onClose,
}: LightboxProps) {
  const { t } = useTranslation()

  const images =
    apartment.images || []

  const goToPreviousImage =
    () => {
      if (
        images.length === 0
      ) {
        return
      }

      setImageIndex(
        imageIndex === 0
          ? images.length - 1
          : imageIndex - 1
      )
    }

  const goToNextImage =
    () => {
      if (
        images.length === 0
      ) {
        return
      }

      setImageIndex(
        imageIndex ===
          images.length - 1
          ? 0
          : imageIndex + 1
      )
    }

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose()
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        goToPreviousImage()
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        goToNextImage()
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [
    imageIndex,
    images.length,
  ])

  useEffect(() => {
    if (
      images.length <= 1
    ) {
      return
    }

    const nextIndex =
      imageIndex ===
      images.length - 1
        ? 0
        : imageIndex + 1

    const nextImage =
      new Image()

    nextImage.src =
      optimizeImage(
        images[nextIndex],
        1600
      )
  }, [
    imageIndex,
    images,
  ])

  if (
    images.length === 0
  ) {
    return null
  }

  const currentImage =
    images[imageIndex]

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

  const optimized2000 =
    optimizeImage(
      currentImage,
      2000
    )

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} ${apartment.type}`}
    >
      <button
        className="lightbox-close"
        aria-label={t(
          "projectDetails.closeGallery"
        )}
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
      >
        ×
      </button>

      {images.length > 1 && (
        <button
          className="lightbox-arrow left"
          aria-label={t(
            "projectDetails.previousImage"
          )}
          onClick={(event) => {
            event.stopPropagation()
            goToPreviousImage()
          }}
        >
          ←
        </button>
      )}

      <div
        className="lightbox-content"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <h3 className="lightbox-title">
          {title} -{" "}
          {apartment.type}
        </h3>

        <img
          className="lightbox-image"
          src={optimized1600}
          srcSet={`
            ${optimized1200} 1200w,
            ${optimized1600} 1600w,
            ${optimized2000} 2000w
          `}
          sizes="90vw"
          alt={`${title} ${
            apartment.type
          } interior ${
            imageIndex + 1
          }`}
          decoding="async"
        />

        <p className="lightbox-counter">
          {imageIndex + 1} /{" "}
          {images.length}
        </p>
      </div>

      {images.length > 1 && (
        <button
          className="lightbox-arrow right"
          aria-label={t(
            "projectDetails.nextImage"
          )}
          onClick={(event) => {
            event.stopPropagation()
            goToNextImage()
          }}
        >
          →
        </button>
      )}
    </div>
  )
}

export default Lightbox