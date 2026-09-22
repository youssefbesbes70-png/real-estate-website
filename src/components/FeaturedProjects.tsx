import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import API_URL from "../config"
import ProjectCard from "./ProjectCard"

type Project = {
  slug: string
  title: string
  location: string
  status: "available" | "sold"
  coverImage: string
}

function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load projects")
        }

        return response.json()
      })
      .then((data: Project[]) => {
        const availableProjects = data
          .filter(
            (project) =>
              project.status === "available"
          )
          .slice(0, 3)

        setProjects(availableProjects)
      })
      .catch((error) => {
        console.error(
          "Error loading featured projects:",
          error
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section className="featured-projects">
      <div className="featured-projects-header">
        <div>
          <p className="section-eyebrow">
            OUR PROJECTS
          </p>

          <h2>
            Selected Developments
          </h2>
        </div>

        <div className="featured-projects-intro">
          <p>
            Explore residences designed around
            contemporary architecture, thoughtful
            details, and comfortable living.
          </p>

          <Link
            to="/projects"
            className="view-all-projects"
          >
            View all projects
            <span>→</span>
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="featured-projects-grid">
          <FeaturedSkeleton />
          <FeaturedSkeleton />
          <FeaturedSkeleton />
        </div>
      ) : (
        <div className="featured-projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              location={project.location}
              status={project.status}
              image={project.coverImage}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function FeaturedSkeleton() {
  return (
    <div className="project-card project-skeleton">
      <div className="skeleton-image" />

      <div className="project-card-content">
        <div className="skeleton-line skeleton-location" />
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-status" />
      </div>
    </div>
  )
}

export default FeaturedProjects