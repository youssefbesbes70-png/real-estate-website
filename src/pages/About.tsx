import { Helmet } from "react-helmet-async"

const values = [
  {
    number: "01",
    title: "Quality",
    text: "Carefully selected materials and attention to execution throughout every project.",
  },
  {
    number: "02",
    title: "Architecture",
    text: "Contemporary spaces designed around comfort, function, and everyday living.",
  },
  {
    number: "03",
    title: "Location",
    text: "Projects positioned with accessibility, lifestyle, and long-term value in mind.",
  },
  {
    number: "04",
    title: "Commitment",
    text: "A clear and reliable approach from development through to final delivery.",
  },
]

function About() {
  return (
    <>
      <Helmet>
        <title>
          À propos | Archytas Immobilière
        </title>

        <meta
          name="description"
          content="Découvrez Archytas Immobilière, notre expérience, notre mission et notre engagement pour des projets résidentiels modernes et de qualité en Tunisie."
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/about"
        />

        <meta
          property="og:title"
          content="À propos | Archytas Immobilière"
        />

        <meta
          property="og:description"
          content="Découvrez Archytas Immobilière, notre mission et notre engagement dans la réalisation de projets immobiliers de qualité en Tunisie."
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
              ABOUT ARCHYTAS
            </p>

            <h1>
              Building spaces with
              <span> purpose and lasting value.</span>
            </h1>
          </div>

          <div className="about-intro-copy">
            <p>
              Archytas Immobilière is a real estate developer
              focused on creating contemporary residential
              projects designed around quality, comfort,
              architecture, and everyday life.
            </p>

            <p>
              From the first idea through to final delivery,
              our approach is centered on thoughtful design,
              reliable execution, and long-term value.
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
            <strong>10+</strong>
            <span>Years of experience</span>
          </div>

          <div>
            <strong>15</strong>
            <span>Projects completed</span>
          </div>

          <div>
            <strong>300+</strong>
            <span>Satisfied clients</span>
          </div>

          <div>
            <strong>480+</strong>
            <span>Apartments delivered</span>
          </div>
        </section>

        <section className="about-mission">
          <div>
            <p className="section-eyebrow">
              OUR MISSION
            </p>

            <h2>
              Creating better places
              <span> to live.</span>
            </h2>
          </div>

          <div className="about-mission-copy">
            <p>
              Our mission is to create modern, comfortable,
              and high-quality living spaces that respond to
              the needs of families, homeowners, and investors.
            </p>

            <p>
              We believe good residential development starts
              with architecture that serves people, materials
              selected with care, and a clear commitment to
              quality from beginning to end.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-values-heading">
            <p className="section-eyebrow">
              WHAT DEFINES US
            </p>

            <h2>
              The principles behind
              <span> every project.</span>
            </h2>
          </div>

          <div className="about-values-list">
            {values.map((value) => (
              <article
                className="about-value"
                key={value.number}
              >
                <span className="about-value-number">
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default About