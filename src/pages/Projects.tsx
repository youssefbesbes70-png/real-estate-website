import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

function Projects() {
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
          {availableProjects.map((project, index) => (
            <ProjectCard
              key={index}
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
          {soldProjects.map((project, index) => (
            <ProjectCard
              key={index}
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