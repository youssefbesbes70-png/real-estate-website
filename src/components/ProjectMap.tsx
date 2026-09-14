type ProjectMapProps = {
  title: string
  mapEmbedUrl: string
}

function ProjectMap({ title, mapEmbedUrl }: ProjectMapProps) {
  return (
    <div className="project-map">
      <h2>Project Location</h2>

      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${title} map`}
      ></iframe>
    </div>
  )
}

export default ProjectMap