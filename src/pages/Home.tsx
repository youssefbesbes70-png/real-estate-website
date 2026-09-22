import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

import Hero from "../components/Hero"
import FeaturedProjects from "../components/FeaturedProjects"
import HomeAbout from "../components/HomeAbout"
import WhyArchytas from "../components/WhyArchytas"
import HomeCTA from "../components/HomeCTA"

function Home() {
  const { t } = useTranslation()

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
          {t("seo.home.title")}
        </title>

        <meta
          name="description"
          content={t("seo.home.description")}
        />

        <link
          rel="canonical"
          href="https://www.archytas-immobiliere.com/"
        />

        <meta
          property="og:title"
          content={t("seo.home.title")}
        />

        <meta
          property="og:description"
          content={t("seo.home.description")}
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

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>

      <main>
        <Hero />
        <FeaturedProjects />
        <HomeAbout />
        <WhyArchytas />
        <HomeCTA />
      </main>
    </>
  )
}

export default Home