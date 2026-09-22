type ProjectMapProps = {
  title: string
  mapEmbedUrl: string
}

function ProjectMap({
  title,
  mapEmbedUrl,
}: ProjectMapProps) {
  if (!mapEmbedUrl) {
    return null
  }

  return (
    <section className="project-map">
      <div className="project-map-header">
        <div>
          <p className="project-section-eyebrow">
            LOCATION
          </p>

          <h2>
            Explore the neighborhood.
          </h2>
        </div>

        <p>
          Discover the location of {title} and its
          surroundings.
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