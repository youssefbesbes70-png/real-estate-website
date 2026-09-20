import API_URL from "../config"
import { useEffect, useState } from "react"
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
  )
}

export default Projects