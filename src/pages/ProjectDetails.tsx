import { useState } from "react"
import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import ProjectHeroSlider from "../components/ProjectHeroSlider"
import ProjectInfo from "../components/ProjectInfo"
import ProjectMap from "../components/ProjectMap"
import ApartmentUnitsSection from "../components/ApartmentUnitsSection"
import Lightbox from "../components/Lightbox"

function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedApartmentIndex, setSelectedApartmentIndex] = useState(0)
  const [selectedApartmentImageIndex, setSelectedApartmentImageIndex] = useState(0)

  if (!project) {
    return <h2 style={{ padding: "40px" }}>Project not found</h2>
  }

  const openLightbox = (apartmentIndex: number, imageIndex: number = 0) => {
    setSelectedApartmentIndex(apartmentIndex)
    setSelectedApartmentImageIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  return (
    <div className="project-details">
      <ProjectHeroSlider
        title={project.title}
        projectImages={project.projectImages}
      />

      <div className="project-details-content">
        <ProjectInfo project={project} />
        <ProjectMap title={project.title} mapEmbedUrl={project.mapEmbedUrl} />
        <ApartmentUnitsSection
          title={project.title}
          apartmentUnits={project.apartmentUnits}
          onOpenLightbox={openLightbox}
        />
      </div>

      {isLightboxOpen && (
        <Lightbox
          title={project.title}
          apartment={project.apartmentUnits[selectedApartmentIndex]}
          imageIndex={selectedApartmentImageIndex}
          setImageIndex={setSelectedApartmentImageIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}

export default ProjectDetails