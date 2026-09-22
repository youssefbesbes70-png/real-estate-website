import { Helmet } from "react-helmet-async"
import Hero from "../components/Hero"

function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Archytas Immobilière",
    url: "https://www.archytas-immobiliere.com",
    logo: "https://www.archytas-immobiliere.com/archytas-logo.png",
    description:
      "Archytas Immobilière développe des projets immobiliers résidentiels modernes en Tunisie.",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Archytas Immobilière",
    url: "https://www.archytas-immobiliere.com",
  }

  return (
    <>
      <Helmet>
        <title>
          Archytas Immobilière | Projets immobiliers en Tunisie
        </title>

        <meta
          name="description"
          content="Découvrez les projets immobiliers d'Archytas Immobilière, nos résidences et appartements disponibles en Tunisie."
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/"
        />

        <meta
          property="og:title"
          content="Archytas Immobilière | Projets immobiliers en Tunisie"
        />

        <meta
          property="og:description"
          content="Découvrez les projets immobiliers d'Archytas Immobilière et nos appartements disponibles en Tunisie."
        />

        <meta
          property="og:url"
          content="https://www.archytas-immobiliere.com/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.archytas-immobiliere.com/archytas-logo.png"
        />

        {/* Structured data */}

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <div>
        <Hero />
      </div>
    </>
  )
}

export default Home