type ApartmentUnit = {
  type: string
  images: string[]
  plan: string
  available: boolean
  floor: string
  surface: string
}

type ApartmentUnitsSectionProps = {
  title: string
  apartmentUnits: ApartmentUnit[]
  onOpenLightbox: (
    apartmentIndex: number,
    imageIndex?: number
  ) => void
}

function optimizeImage(imageUrl: string) {
  if (!imageUrl) {
    return ""
  }

  if (imageUrl.includes("/image/upload/")) {
    return imageUrl.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto,w_1000,c_limit/"
    )
  }

  return imageUrl
}

function ApartmentUnitsSection({
  title,
  apartmentUnits,
  onOpenLightbox,
}: ApartmentUnitsSectionProps) {
  const sortedApartmentUnits = apartmentUnits
    .map((unit, originalIndex) => ({
      unit,
      originalIndex,
    }))
    .sort((a, b) => {
      if (a.unit.available === b.unit.available) {
        return 0
      }

      return a.unit.available ? -1 : 1
    })

  return (
    <section className="project-apartments">

      <div className="project-apartments-header">
        <div>
          <p className="project-section-eyebrow">
            RESIDENCES
          </p>

          <h2>
            Apartment types.
          </h2>
        </div>

        <p>
          Explore the available layouts, surfaces,
          plans, and interior views for {title}.
        </p>
      </div>


      <div className="apartment-units-grid">

        {sortedApartmentUnits.map(
          ({ unit, originalIndex }) => {
            const firstImage =
              unit.images?.[0] || ""

            const optimizedImage =
              optimizeImage(firstImage)

            return (
              <article
                key={originalIndex}
                className={
                  unit.available
                    ? "apartment-unit-card"
                    : "apartment-unit-card apartment-unit-card-sold"
                }
              >

                {/* IMAGE */}

                <div className="apartment-card-image">

                  {optimizedImage ? (
                    <img
                      src={optimizedImage}
                      alt={`${title} ${unit.type}`}
                      loading="lazy"
                      decoding="async"
                      onClick={() =>
                        onOpenLightbox(
                          originalIndex,
                          0
                        )
                      }
                    />
                  ) : (
                    <div className="apartment-no-image">
                      <span>
                        Interior images
                      </span>

                      <strong>
                        Coming soon
                      </strong>
                    </div>
                  )}


                  <span
                    className={
                      unit.available
                        ? "apartment-status available-unit"
                        : "apartment-status sold-unit"
                    }
                  >
                    {unit.available
                      ? "Available"
                      : "Sold"}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="apartment-card-content">

                  <div className="apartment-card-heading">
                    <div>
                      <p>
                        APARTMENT TYPE
                      </p>

                      <h3>
                        {unit.type}
                      </h3>
                    </div>

                    {unit.images.length > 0 && (
                      <span className="apartment-photo-count">
                        {unit.images.length}{" "}
                        {unit.images.length === 1
                          ? "photo"
                          : "photos"}
                      </span>
                    )}
                  </div>


                  {/* DETAILS */}

                  <div className="apartment-card-details">

                    <div>
                      <span>
                        Floor
                      </span>

                      <strong>
                        {unit.floor}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Surface
                      </span>

                      <strong>
                        {unit.surface}
                      </strong>
                    </div>

                  </div>


                  {/* ACTION */}

                  <div className="apartment-card-action">

                    {unit.available &&
                    unit.plan ? (
                      <a
                        href={unit.plan}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View floor plan
                        <span>→</span>
                      </a>
                    ) : unit.available ? (
                      <span className="apartment-plan-unavailable">
                        Plan coming soon
                      </span>
                    ) : (
                      <span className="apartment-plan-unavailable">
                        No longer available
                      </span>
                    )}

                  </div>

                </div>

              </article>
            )
          }
        )}

      </div>

    </section>
  )
}

export default ApartmentUnitsSection