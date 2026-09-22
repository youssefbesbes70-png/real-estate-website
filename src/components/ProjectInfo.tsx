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
    <section className="project-info">
      <div className="project-info-header">
        <div>
          <p className="project-info-location">
            {project.location}
          </p>

          <h1>
            {project.title}
          </h1>
        </div>

        <span
          className={
            project.status === "sold"
              ? "project-status-badge project-status-sold"
              : "project-status-badge project-status-available"
          }
        >
          {project.status === "sold"
            ? "Sold Out"
            : "Available"}
        </span>
      </div>

      <div className="project-facts">
        <div className="project-fact">
          <span>Starting price</span>
          <strong>{project.price}</strong>
        </div>

        <div className="project-fact">
          <span>Apartments</span>
          <strong>{project.apartments}</strong>
        </div>

        <div className="project-fact">
          <span>Delivery</span>
          <strong>{project.deliveryDate}</strong>
        </div>
      </div>

      <div className="project-about">
        <p className="project-section-eyebrow">
          ABOUT THE PROJECT
        </p>

        <h2>
          Designed for modern living.
        </h2>

        <p className="project-description">
          {project.description}
        </p>
      </div>
    </section>
  )
}

export default ProjectInfo