import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

type ProjectCTAProps = {
  title: string
}

function ProjectCTA({
  title,
}: ProjectCTAProps) {
  const { t } = useTranslation()

  return (
    <section className="project-cta">
      <div className="project-cta-content">
        <p className="project-section-eyebrow">
          {t(
            "projectCta.eyebrow"
          )}
        </p>

        <h2>
          {t(
            "projectCta.title1",
            {
              title,
            }
          )}

          <span>
            {t(
              "projectCta.title2"
            )}
          </span>
        </h2>

        <p>
          {t(
            "projectCta.description"
          )}
        </p>
      </div>

      <div className="project-cta-actions">
        <Link
          to="/contact"
          className="project-cta-primary"
        >
          {t(
            "projectCta.contact"
          )}

          <span>
            →
          </span>
        </Link>

        <Link
          to="/projects"
          className="project-cta-secondary"
        >
          {t(
            "projectCta.otherProjects"
          )}
        </Link>
      </div>
    </section>
  )
}

export default ProjectCTA