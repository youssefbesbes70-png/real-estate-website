import { useNavigate } from "react-router-dom"

type ProjectCardProps = {
  slug: string
  title: string
  location: string
  status: string
  image: string
}

function ProjectCard({ slug, title, location, status, image }: ProjectCardProps) {
  const navigate = useNavigate()

  const goToProject = () => {
    navigate(`/projects/${slug}`)
  }

  return (
    <div className="project-card clickable-card" onClick={goToProject}>
      <img src={image} alt={title} />

      <div className="project-card-content">
        <h3>{title}</h3>
        <p className="location">{location}</p>

        <p className={status === "sold" ? "status sold" : "status available"}>
          {status === "sold" ? "Sold Out" : "Available"}
        </p>

        <button
          onClick={(event) => {
            event.stopPropagation()
            navigate(`/projects/${slug}`)
          }}
        >
          View Project
        </button>
      </div>
    </div>
  )
}

export default ProjectCard