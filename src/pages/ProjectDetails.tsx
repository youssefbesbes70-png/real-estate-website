import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProjectHeroSlider from "../components/ProjectHeroSlider"
import ProjectInfo from "../components/ProjectInfo"
import ProjectMap from "../components/ProjectMap"
import ApartmentUnitsSection from "../components/ApartmentUnitsSection"
import Lightbox from "../components/Lightbox"

type ApartmentUnit = {
  type: string
  images: string[]
  plan: string
  available: boolean
  floor: string
  surface: string
}

type Project = {
  slug: string
  title: string
  location: string
  status: string
  price: string
  apartments: number
  deliveryDate: string
  coverImage: string
  projectImages: string[]
  apartmentUnits: ApartmentUnit[]
  description: string
  mapEmbedUrl: string
}

function ProjectDetails() {
  const { slug } = useParams()

  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedApartmentIndex, setSelectedApartmentIndex] = useState(0)
  const [selectedApartmentImageIndex, setSelectedApartmentImageIndex] =
    useState(0)

  useEffect(() => {
    if (!slug) {
      setError(true)
      setLoading(false)
      return
    }

    fetch(`http://localhost:5000/api/projects/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Project not found")
        }

        return response.json()
      })
      .then((data) => {
        setProject(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching project:", error)
        setError(true)
        setLoading(false)
      })
  }, [slug])

  const openLightbox = (
    apartmentIndex: number,
    imageIndex: number = 0
  ) => {
    setSelectedApartmentIndex(apartmentIndex)
    setSelectedApartmentImageIndex(imageIndex)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  if (loading) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>
  }

  if (error || !project) {
    return <h2 style={{ padding: "40px" }}>Project not found</h2>
  }

  return (
    <div className="project-details">
      <ProjectHeroSlider
        title={project.title}
        projectImages={project.projectImages}
      />

      <div className="project-details-content">
        <ProjectInfo project={project} />

        <ProjectMap
          title={project.title}
          mapEmbedUrl={project.mapEmbedUrl}
        />

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