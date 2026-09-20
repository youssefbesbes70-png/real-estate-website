import { Helmet } from "react-helmet-async"
import StatCard from "../components/StatCard"

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

      <div className="about-page">
        <section className="about-hero">
          <h1>About Us</h1>

          <p>
            We are a real estate developer focused on building high-quality
            residential projects designed for modern living.
          </p>
        </section>

        <section className="about-stats">
          <StatCard
            end={10}
            suffix="+"
            label="Years of Experience"
          />

          <StatCard
            end={15}
            label="Projects Completed"
          />

          <StatCard
            end={300}
            suffix="+"
            label="Satisfied Clients"
          />

          <StatCard
            end={500}
            suffix="+"
            label="Apartments Delivered"
          />
        </section>

        <section className="about-description">
          <h2>Our Mission</h2>

          <p>
            Our mission is to create modern, comfortable, and high-quality
            living spaces that meet the needs of families and investors.
          </p>

          <h2>Why Choose Us</h2>

          <ul>
            <li>✔ High-quality construction</li>
            <li>✔ Prime locations</li>
            <li>✔ Modern architecture</li>
            <li>✔ Trusted by hundreds of clients</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default About