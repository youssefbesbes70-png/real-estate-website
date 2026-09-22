import { useTranslation } from "react-i18next"

function WhyArchytas() {
  const { t } = useTranslation()

  const reasons = [
    {
      number: "01",
      title: t("why.quality"),
      text: t("why.qualityText"),
    },
    {
      number: "02",
      title: t("why.architecture"),
      text: t("why.architectureText"),
    },
    {
      number: "03",
      title: t("why.location"),
      text: t("why.locationText"),
    },
    {
      number: "04",
      title: t("why.commitment"),
      text: t("why.commitmentText"),
    },
  ]

  return (
    <section className="why-archytas">
      <div className="why-archytas-header">
        <div>
          <p className="section-eyebrow">
            {t("why.eyebrow")}
          </p>

          <h2>
            {t("why.title1")}
            <span>
              {t("why.title2")}
            </span>
          </h2>
        </div>

        <p className="why-archytas-intro">
          {t("why.intro")}
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