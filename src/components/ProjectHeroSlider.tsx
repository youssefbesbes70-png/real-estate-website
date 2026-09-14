import { useState } from "react"

type ProjectHeroSliderProps = {
  title: string
  projectImages: string[]
}

function ProjectHeroSlider({ title, projectImages }: ProjectHeroSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(projectImages.length - 1)
    } else {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const goToNextImage = () => {
    if (currentImageIndex === projectImages.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  return (
    <div className="image-slider">
      <button className="slider-button left" onClick={goToPreviousImage}>
        ←
      </button>

      <img
        className="project-details-image"
        src={projectImages[currentImageIndex]}
        alt={`${title} exterior ${currentImageIndex + 1}`}
      />

      <button className="slider-button right" onClick={goToNextImage}>
        →
      </button>
    </div>
  )
}

export default ProjectHeroSlider