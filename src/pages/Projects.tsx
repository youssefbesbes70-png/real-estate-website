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

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error)
      })
  }, [])

  const availableProjects = projects.filter(
    (project) => project.status === "available"
  )

  const soldProjects = projects.filter(
    (project) => project.status === "sold"
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
        <section className="projects-section">
          <h2>Available Projects</h2>

          <div className="projects-list">
            {availableProjects.map((project) => (
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
        </section>

        <section className="projects-section sold-section">
          <h2>Sold Projects</h2>

          <div className="projects-list">
            {soldProjects.map((project) => (
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
        </section>
      </div>
    </>
  )
}

export default Projects