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
  setImageIndex: (index: number) => void
  onClose: () => void
}

function Lightbox({
  title,
  apartment,
  imageIndex,
  setImageIndex,
  onClose,
}: LightboxProps) {
  const goToPreviousImage = () => {
    if (imageIndex === 0) {
      setImageIndex(apartment.images.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }

  const goToNextImage = () => {
    if (imageIndex === apartment.images.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button
        className="lightbox-close"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
      >
        ×
      </button>

      <button
        className="lightbox-arrow left"
        onClick={(event) => {
          event.stopPropagation()
          goToPreviousImage()
        }}
      >
        ←
      </button>

      <div
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="lightbox-title">
          {title} - {apartment.type}
        </h3>

        <img
          className="lightbox-image"
          src={apartment.images[imageIndex]}
          alt={`${title} ${apartment.type} interior ${imageIndex + 1}`}
        />

        <p className="lightbox-counter">
          {imageIndex + 1} / {apartment.images.length}
        </p>
      </div>

      <button
        className="lightbox-arrow right"
        onClick={(event) => {
          event.stopPropagation()
          goToNextImage()
        }}
      >
        →
      </button>
    </div>
  )
}

export default Lightbox