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

type ProjectInfoProps = {
  project: Project
}

function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="project-info">
      <h1>{project.title}</h1>

      <p>
        <strong>Location:</strong> {project.location}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {project.status === "sold" ? "Sold Out" : "Available"}
      </p>

      <p>
        <strong>Price:</strong> {project.price}
      </p>

      <p>
        <strong>Number of apartments:</strong> {project.apartments}
      </p>

      <p>
        <strong>Delivery date:</strong> {project.deliveryDate}
      </p>

      <p>{project.description}</p>
    </div>
  )
}

export default ProjectInfo