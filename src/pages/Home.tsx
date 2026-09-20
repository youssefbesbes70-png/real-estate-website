import { Helmet } from "react-helmet-async"
import Hero from "../components/Hero"

function Home() {
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
      </Helmet>

      <div>
        <Hero />
      </div>
    </>
  )
}

export default Home