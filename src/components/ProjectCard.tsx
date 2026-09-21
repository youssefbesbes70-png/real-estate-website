import { useNavigate } from "react-router-dom"

type ProjectCardProps = {
  slug: string
  title: string
  location: string
  status: string
  image: string
}

// Optimize Cloudinary images for project cards
function optimizeImage(imageUrl: string) {
  if (!imageUrl) {
    return imageUrl
  }

  // Only modify Cloudinary URLs
  if (imageUrl.includes("/image/upload/")) {
    return imageUrl.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto,w_800,c_limit/"
    )
  }

  return imageUrl
}

function ProjectCard({
  slug,
  title,
  location,
  status,
  image,
}: ProjectCardProps) {
  const navigate = useNavigate()

  const goToProject = () => {
    navigate(`/projects/${slug}`)
  }

  const optimizedImage = optimizeImage(image)

  return (
    <div
      className="project-card clickable-card"
      onClick={goToProject}
    >
      <img
        src={optimizedImage}
        alt={`${title} - ${location}`}
        loading="lazy"
        decoding="async"
      />

      <div className="project-card-content">
        <h3>{title}</h3>

        <p className="location">
          {location}
        </p>

        <p
          className={
            status === "sold"
              ? "status sold"
              : "status available"
          }
        >
          {status === "sold"
            ? "Sold Out"
            : "Available"}
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