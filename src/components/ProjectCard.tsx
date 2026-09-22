import { Link } from "react-router-dom"

type ProjectCardProps = {
  slug: string
  title: string
  location: string
  status: string
  image: string
}

function optimizeImage(imageUrl: string) {
  if (!imageUrl) {
    return imageUrl
  }

  if (imageUrl.includes("/image/upload/")) {
    return imageUrl.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto,w_1000,c_limit/"
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
  const optimizedImage = optimizeImage(image)

  return (
    <Link
      to={`/projects/${slug}`}
      className="project-card project-card-premium"
    >
      <div className="project-card-image-wrapper">
        <img
          src={optimizedImage}
          alt={`${title} - ${location}`}
          loading="lazy"
          decoding="async"
        />

        <div className="project-card-image-overlay" />

        <span
          className={
            status === "sold"
              ? "project-badge project-badge-sold"
              : "project-badge project-badge-available"
          }
        >
          {status === "sold" ? "Sold" : "Available"}
        </span>
      </div>

      <div className="project-card-content">
        <p className="project-card-location">
          {location}
        </p>

        <h3>
          {title}
        </h3>

        <div className="project-card-footer">
          <span>
            Discover Project
          </span>

          <span className="project-card-arrow">
            →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard