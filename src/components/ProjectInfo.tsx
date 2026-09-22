import { useTranslation } from "react-i18next"

type ApartmentUnit = {
  type: string
  images: string[]
  plan: string
  available: boolean
  floor: string
  surface: string
}

type Project = {
  slug: string
  title: string
  location: string
  status: string
  price: string
  apartments: number
  deliveryDate: string
  coverImage: string
  projectImages: string[]
  apartmentUnits: ApartmentUnit[]
  description: string
  mapEmbedUrl: string
}

type ProjectInfoProps = {
  project: Project
}

function ProjectInfo({
  project,
}: ProjectInfoProps) {
  const { t } = useTranslation()

  return (
    <section className="project-info">
      <div className="project-info-header">
        <div>
          <p className="project-info-location">
            {project.location}
          </p>

          <h1>
            {project.title}
          </h1>
        </div>

        <span
          className={
            project.status === "sold"
              ? "project-status-badge project-status-sold"
              : "project-status-badge project-status-available"
          }
        >
          {project.status === "sold"
            ? t("projectDetails.soldOut")
            : t("projectDetails.available")}
        </span>
      </div>

      <div className="project-facts">
        <div className="project-fact">
          <span>
            {t(
              "projectDetails.startingPrice"
            )}
          </span>

          <strong>
            {project.price}
          </strong>
        </div>

        <div className="project-fact">
          <span>
            {t(
              "projectDetails.apartments"
            )}
          </span>

          <strong>
            {project.apartments}
          </strong>
        </div>

        <div className="project-fact">
          <span>
            {t(
              "projectDetails.delivery"
            )}
          </span>

          <strong>
            {project.deliveryDate}
          </strong>
        </div>
      </div>

      <div className="project-about">
        <div>
          <p className="project-section-eyebrow">
            {t(
              "projectDetails.aboutEyebrow"
            )}
          </p>

          <h2>
            {t(
              "projectDetails.aboutTitle"
            )}
          </h2>
        </div>

        <p className="project-description">
          {project.description}
        </p>
      </div>
    </section>
  )
}

export default ProjectInfo