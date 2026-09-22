import { useTranslation } from "react-i18next"

type ProjectMapProps = {
  title: string
  mapEmbedUrl: string
}

function ProjectMap({
  title,
  mapEmbedUrl,
}: ProjectMapProps) {
  const { t } = useTranslation()

  if (!mapEmbedUrl) {
    return null
  }

  return (
    <section className="project-map">
      <div className="project-map-header">
        <div>
          <p className="project-section-eyebrow">
            {t(
              "projectDetails.locationEyebrow"
            )}
          </p>

          <h2>
            {t(
              "projectDetails.locationTitle"
            )}
          </h2>
        </div>

        <p>
          {t(
            "projectDetails.locationDescription",
            {
              title,
            }
          )}
        </p>
      </div>

      <div className="project-map-frame">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${title} map`}
        />
      </div>
    </section>
  )
}

export default ProjectMap