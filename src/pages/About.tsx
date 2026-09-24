import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

function About() {
  const { t } = useTranslation()

  const values = [
    {
      number: "01",
      title: t(
        "aboutPage.quality"
      ),
      text: t(
        "aboutPage.qualityText"
      ),
    },
    {
      number: "02",
      title: t(
        "aboutPage.architecture"
      ),
      text: t(
        "aboutPage.architectureText"
      ),
    },
    {
      number: "03",
      title: t(
        "aboutPage.location"
      ),
      text: t(
        "aboutPage.locationText"
      ),
    },
    {
      number: "04",
      title: t(
        "aboutPage.commitment"
      ),
      text: t(
        "aboutPage.commitmentText"
      ),
    },
  ]

  return (
    <>
      <Helmet>
        <title>
          {t("seo.about.title")}
        </title>

        <meta
          name="description"
          content={t(
            "seo.about.description"
          )}
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/about"
        />

        <meta
          property="og:title"
          content={t(
            "seo.about.title"
          )}
        />

        <meta
          property="og:description"
          content={t(
            "seo.about.description"
          )}
        />

        <meta
          property="og:url"
          content="https://www.archytas-immobiliere.com/about"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="about-redesign">
        <section className="about-intro">
          <div>
            <p className="section-eyebrow">
              {t(
                "aboutPage.eyebrow"
              )}
            </p>

            <h1>
              {t(
                "aboutPage.title1"
              )}

              <span>
                {t(
                  "aboutPage.title2"
                )}
              </span>
            </h1>
          </div>

          <div className="about-intro-copy">
            <p>
              {t(
                "aboutPage.intro1"
              )}
            </p>

            <p>
              {t(
                "aboutPage.intro2"
              )}
            </p>
          </div>
        </section>

        <section className="about-feature-image">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
            alt="Contemporary architecture"
            loading="lazy"
          />
        </section>

        <section className="about-numbers">
          <div>
            <strong>
              15+
            </strong>

            <span>
              {t(
                "aboutPage.years"
              )}
            </span>
          </div>

          <div>
            <strong>
              10
            </strong>

            <span>
              {t(
                "aboutPage.projects"
              )}
            </span>
          </div>

          <div>
            <strong>
              200+
            </strong>

            <span>
              {t(
                "aboutPage.clients"
              )}
            </span>
          </div>

          <div>
            <strong>
              200+
            </strong>

            <span>
              {t(
                "aboutPage.apartments"
              )}
            </span>
          </div>
        </section>

        <section className="about-mission">
          <div>
            <p className="section-eyebrow">
              {t(
                "aboutPage.missionEyebrow"
              )}
            </p>

            <h2>
              {t(
                "aboutPage.missionTitle1"
              )}

              <span>
                {t(
                  "aboutPage.missionTitle2"
                )}
              </span>
            </h2>
          </div>

          <div className="about-mission-copy">
            <p>
              {t(
                "aboutPage.missionText1"
              )}
            </p>

            <p>
              {t(
                "aboutPage.missionText2"
              )}
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-values-heading">
            <p className="section-eyebrow">
              {t(
                "aboutPage.valuesEyebrow"
              )}
            </p>

            <h2>
              {t(
                "aboutPage.valuesTitle1"
              )}

              <span>
                {t(
                  "aboutPage.valuesTitle2"
                )}
              </span>
            </h2>
          </div>

          <div className="about-values-list">
            {values.map(
              (value) => (
                <article
                  className="about-value"
                  key={value.number}
                >
                  <span className="about-value-number">
                    {
                      value.number
                    }
                  </span>

                  <h3>
                    {
                      value.title
                    }
                  </h3>

                  <p>
                    {value.text}
                  </p>
                </article>
              )
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default About