import API_URL from "../config"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

import ProjectCard from "../components/ProjectCard"

type Project = {
  slug: string
  title: string
  location: string
  status: "available" | "sold"
  coverImage: string
}

function Projects() {
  const { t } = useTranslation()

  const [projects, setProjects] =
    useState<Project[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

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
            t("projectsPage.errorMessage")
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
          t("projectsPage.errorMessage")
        )
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [t])

  const availableProjects =
    projects.filter(
      (project) =>
        project.status === "available"
    )

  const soldProjects =
    projects.filter(
      (project) =>
        project.status === "sold"
    )

  return (
    <>
      <Helmet>
        <title>
          {t("seo.projects.title")}
        </title>

        <meta
          name="description"
          content={t(
            "seo.projects.description"
          )}
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/projects"
        />

        <meta
          property="og:title"
          content={t(
            "seo.projects.title"
          )}
        />

        <meta
          property="og:description"
          content={t(
            "seo.projects.description"
          )}
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
        {loading && (
          <section className="projects-section">
            <h2>
              {t(
                "projectsPage.available"
              )}
            </h2>

            <div className="projects-list">
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          </section>
        )}

        {!loading && error && (
          <div className="projects-error">
            <h2>
              {t(
                "projectsPage.errorTitle"
              )}
            </h2>

            <p>
              {error}
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
            >
              {t(
                "projectsPage.retry"
              )}
            </button>
          </div>
        )}

        {!loading &&
          !error && (
            <>
              <section className="projects-section">
                <h2>
                  {t(
                    "projectsPage.available"
                  )}
                </h2>

                <div className="projects-list">
                  {availableProjects.map(
                    (project) => (
                      <ProjectCard
                        key={
                          project.slug
                        }
                        slug={
                          project.slug
                        }
                        title={
                          project.title
                        }
                        location={
                          project.location
                        }
                        status={
                          project.status
                        }
                        image={
                          project.coverImage
                        }
                      />
                    )
                  )}
                </div>
              </section>

              {soldProjects.length >
                0 && (
                <section className="projects-section sold-section">
                  <h2>
                    {t(
                      "projectsPage.sold"
                    )}
                  </h2>

                  <div className="projects-list">
                    {soldProjects.map(
                      (project) => (
                        <ProjectCard
                          key={
                            project.slug
                          }
                          slug={
                            project.slug
                          }
                          title={
                            project.title
                          }
                          location={
                            project.location
                          }
                          status={
                            project.status
                          }
                          image={
                            project.coverImage
                          }
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