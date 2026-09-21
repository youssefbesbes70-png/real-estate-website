import API_URL from "../config"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"

import ProjectCard from "../components/ProjectCard"

type Project = {
  slug: string
  title: string
  location: string
  status: "available" | "sold"
  coverImage: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true)
        setError("")

        const response = await fetch(
          `${API_URL}/api/projects`
        )

        if (!response.ok) {
          throw new Error(
            "Unable to load projects."
          )
        }

        const data = await response.json()

        setProjects(data)
      } catch (error) {
        console.error(
          "Error fetching projects:",
          error
        )

        setError(
          "Unable to load projects. Please try again."
        )
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const availableProjects = projects.filter(
    (project) =>
      project.status === "available"
  )

  const soldProjects = projects.filter(
    (project) =>
      project.status === "sold"
  )

  return (
    <>
      <Helmet>
        <title>
          Nos projets immobiliers | Archytas Immobilière
        </title>

        <meta
          name="description"
          content="Découvrez les projets immobiliers d'Archytas Immobilière, les appartements disponibles et nos résidences en Tunisie."
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/projects"
        />

        <meta
          property="og:title"
          content="Nos projets immobiliers | Archytas Immobilière"
        />

        <meta
          property="og:description"
          content="Découvrez les projets et appartements proposés par Archytas Immobilière en Tunisie."
        />

        <meta
          property="og:url"
          content="https://www.archytas-immobiliere.com/projects"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <div>
        {/* =========================================
            LOADING
        ========================================= */}

        {loading && (
          <section className="projects-section">
            <h2>
              Available Projects
            </h2>

            <div className="projects-list">
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          </section>
        )}

        {/* =========================================
            ERROR
        ========================================= */}

        {!loading && error && (
          <div className="projects-error">
            <h2>
              Something went wrong
            </h2>

            <p>
              {error}
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
            >
              Try Again
            </button>
          </div>
        )}

        {/* =========================================
            PROJECTS
        ========================================= */}

        {!loading && !error && (
          <>
            <section className="projects-section">
              <h2>
                Available Projects
              </h2>

              <div className="projects-list">
                {availableProjects.map(
                  (project) => (
                    <ProjectCard
                      key={project.slug}
                      slug={project.slug}
                      title={project.title}
                      location={project.location}
                      status={project.status}
                      image={project.coverImage}
                    />
                  )
                )}
              </div>
            </section>

            {soldProjects.length > 0 && (
              <section className="projects-section sold-section">
                <h2>
                  Sold Projects
                </h2>

                <div className="projects-list">
                  {soldProjects.map(
                    (project) => (
                      <ProjectCard
                        key={project.slug}
                        slug={project.slug}
                        title={project.title}
                        location={project.location}
                        status={project.status}
                        image={project.coverImage}
                      />
                    )
                  )}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </>
  )
}

function ProjectSkeleton() {
  return (
    <div className="project-card project-skeleton">
      <div className="skeleton-image" />

      <div className="project-card-content">
        <div className="skeleton-line skeleton-title" />

        <div className="skeleton-line skeleton-location" />

        <div className="skeleton-line skeleton-status" />

        <div className="skeleton-button" />
      </div>
    </div>
  )
}

export default Projects