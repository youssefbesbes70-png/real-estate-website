import API_URL from "../config"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

import ProjectHeroSlider from "../components/ProjectHeroSlider"
import ProjectInfo from "../components/ProjectInfo"
import ProjectMap from "../components/ProjectMap"
import ApartmentUnitsSection from "../components/ApartmentUnitsSection"
import ProjectCTA from "../components/ProjectCTA"
import Lightbox from "../components/Lightbox"

type ApartmentUnit = {
  type: string
  images: string[]
  plans: string[]
  available: boolean
  floor: string
  surface: string
}

type Project = {
  slug: string
  title: string
  location: string
  status: string
  price: string
  apartments: number
  deliveryDate: string
  coverImage: string
  projectImages: string[]
  apartmentUnits: ApartmentUnit[]
  description: string
  mapEmbedUrl: string
}

type ApiApartmentUnit = {
  type?: string
  images?: string[]
  plan?: string
  plans?: string[]
  available?: boolean
  floor?: string
  surface?: string
}

function ProjectDetails() {
  const { slug } = useParams()

  const { t } = useTranslation()

  const [project, setProject] =
    useState<Project | null>(null)

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState(false)

  const [
    isLightboxOpen,
    setIsLightboxOpen,
  ] = useState(false)

  const [
    selectedApartmentIndex,
    setSelectedApartmentIndex,
  ] = useState(0)

  const [
    selectedApartmentImageIndex,
    setSelectedApartmentImageIndex,
  ] = useState(0)

  useEffect(() => {
    if (!slug) {
      setError(true)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(false)

    fetch(
      `${API_URL}/api/projects/${slug}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Project not found"
          )
        }

        return response.json()
      })
      .then((data) => {
        const normalizedProject: Project = {
          ...data,

          projectImages:
            Array.isArray(
              data.projectImages
            )
              ? data.projectImages
              : [],

          apartmentUnits:
            (
              data.apartmentUnits ?? []
            ).map(
              (
                apartment: ApiApartmentUnit
              ) => ({
                type:
                  apartment.type ?? "",

                images:
                  Array.isArray(
                    apartment.images
                  )
                    ? apartment.images
                    : [],

                plans:
                  Array.isArray(
                    apartment.plans
                  )
                    ? apartment.plans
                    : apartment.plan
                      ? [
                          apartment.plan,
                        ]
                      : [],

                available:
                  apartment.available ??
                  true,

                floor:
                  apartment.floor ??
                  "",

                surface:
                  apartment.surface ??
                  "",
              })
            ),
        }

        setProject(
          normalizedProject
        )

        setLoading(false)
      })
      .catch((error) => {
        console.error(
          "Error fetching project:",
          error
        )

        setError(true)
        setLoading(false)
      })
  }, [slug])

  const openLightbox = (
    apartmentIndex: number,
    imageIndex: number = 0
  ) => {
    setSelectedApartmentIndex(
      apartmentIndex
    )

    setSelectedApartmentImageIndex(
      imageIndex
    )

    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  if (loading) {
    return (
      <>
        <Helmet>
          <title>
            {t(
              "projectDetails.loading"
            )}{" "}
            | Archytas Immobilière
          </title>
        </Helmet>

        <h2
          style={{
            padding: "40px",
          }}
        >
          {t(
            "projectDetails.loading"
          )}
        </h2>
      </>
    )
  }

  if (
    error ||
    !project
  ) {
    return (
      <>
        <Helmet>
          <title>
            {t(
              "projectDetails.notFound"
            )}{" "}
            | Archytas Immobilière
          </title>

          <meta
            name="robots"
            content="noindex, nofollow"
          />
        </Helmet>

        <h2
          style={{
            padding: "40px",
          }}
        >
          {t(
            "projectDetails.notFound"
          )}
        </h2>
      </>
    )
  }

  const projectUrl =
    `https://www.archytas-immobiliere.com/projects/${project.slug}`

  const seoTitle =
    `${project.title} | Archytas Immobilière`

  const seoDescription =
    project.description
      ? project.description.length >
        155
        ? `${project.description.substring(
            0,
            152
          )}...`
        : project.description
      : `${project.title} - ${project.location}`

  const seoImage =
    project.coverImage ||
    project.projectImages?.[0] ||
    ""

  const selectedApartment =
    project.apartmentUnits[
      selectedApartmentIndex
    ]

  return (
    <>
      <Helmet>
        <title>
          {seoTitle}
        </title>

        <meta
          name="description"
          content={
            seoDescription
          }
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href={projectUrl}
        />

        <meta
          property="og:title"
          content={seoTitle}
        />

        <meta
          property="og:description"
          content={
            seoDescription
          }
        />

        <meta
          property="og:url"
          content={projectUrl}
        />

        <meta
          property="og:type"
          content="website"
        />

        {seoImage && (
          <meta
            property="og:image"
            content={seoImage}
          />
        )}
      </Helmet>

      <div className="project-details">
        <ProjectHeroSlider
          title={
            project.title
          }
          projectImages={
            project.projectImages
          }
        />

        <div className="project-details-content">
          <ProjectInfo
            project={project}
          />

          <ProjectMap
            title={
              project.title
            }
            mapEmbedUrl={
              project.mapEmbedUrl
            }
          />

          <ApartmentUnitsSection
            title={
              project.title
            }
            apartmentUnits={
              project.apartmentUnits
            }
            onOpenLightbox={
              openLightbox
            }
          />

          <ProjectCTA
            title={
              project.title
            }
          />
        </div>

        {isLightboxOpen &&
          selectedApartment && (
            <Lightbox
              title={
                project.title
              }
              apartment={
                selectedApartment
              }
              imageIndex={
                selectedApartmentImageIndex
              }
              setImageIndex={
                setSelectedApartmentImageIndex
              }
              onClose={
                closeLightbox
              }
            />
          )}
      </div>
    </>
  )
}

export default ProjectDetails