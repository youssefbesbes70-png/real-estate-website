const reasons = [
  {
    number: "01",
    title: "Quality",
    text: "Carefully selected materials and attention to execution at every stage of development.",
  },
  {
    number: "02",
    title: "Architecture",
    text: "Contemporary residential spaces designed around comfort, function, and everyday living.",
  },
  {
    number: "03",
    title: "Location",
    text: "Projects selected with accessibility, lifestyle, and long-term value in mind.",
  },
  {
    number: "04",
    title: "Commitment",
    text: "A clear and reliable approach from project development through to final delivery.",
  },
]

function WhyArchytas() {
  return (
    <section className="why-archytas">
      <div className="why-archytas-header">
        <div>
          <p className="section-eyebrow">
            WHY ARCHYTAS
          </p>

          <h2>
            Built around
            <span> what matters.</span>
          </h2>
        </div>

        <p className="why-archytas-intro">
          We focus on the details that create better places to live,
          from architecture and materials to location and delivery.
        </p>
      </div>

      <div className="why-archytas-list">
        {reasons.map((reason) => (
          <div
            className="why-archytas-item"
            key={reason.number}
          >
            <span className="why-number">
              {reason.number}
            </span>

            <h3>
              {reason.title}
            </h3>

            <p>
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyArchytas