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


// =====================================================
// CLOUDINARY IMAGE OPTIMIZATION
// =====================================================

function optimizeImage(imageUrl: string) {
  if (!imageUrl) {
    return ""
  }

  if (imageUrl.includes("/image/upload/")) {
    return imageUrl.replace(
      "/image/upload/",
      "/image/upload/f_auto,q_auto,w_800,c_limit/"
    )
  }

  return imageUrl
}


function ApartmentUnitsSection({
  title,
  apartmentUnits,
  onOpenLightbox,
}: ApartmentUnitsSectionProps) {

  // Keep the ORIGINAL index.
  // This is important for the lightbox.
  const sortedApartmentUnits =
    apartmentUnits
      .map((unit, originalIndex) => ({
        unit,
        originalIndex,
      }))
      .sort((a, b) => {
        if (
          a.unit.available ===
          b.unit.available
        ) {
          return 0
        }

        return a.unit.available
          ? -1
          : 1
      })


  return (
    <div className="project-gallery">

      <h2>
        Apartment Interior Views
      </h2>


      <div className="apartment-units-grid">

        {sortedApartmentUnits.map(
          ({
            unit,
            originalIndex,
          }) => {

            const firstImage =
              unit.images?.[0] || ""

            const optimizedImage =
              optimizeImage(firstImage)


            return (
              <div
                key={originalIndex}
                className={`apartment-unit-card ${
                  unit.available
                    ? ""
                    : "apartment-unit-card-sold"
                }`}
              >

                {/* =========================
                    HEADER
                ========================= */}

                <div className="apartment-unit-header">

                  <h3>
                    {unit.type}
                  </h3>

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


                {/* =========================
                    IMAGE
                ========================= */}

                {optimizedImage && (
                  <img
                    src={optimizedImage}

                    alt={`${title} ${unit.type}`}

                    className="gallery-image"

                    loading="lazy"

                    decoding="async"

                    onClick={() =>
                      onOpenLightbox(
                        originalIndex,
                        0
                      )
                    }
                  />
                )}


                {/* =========================
                    DETAILS
                ========================= */}

                <div className="apartment-unit-details">

                  <p>
                    <strong>
                      Floor:
                    </strong>{" "}
                    {unit.floor}
                  </p>

                  <p>
                    <strong>
                      Surface:
                    </strong>{" "}
                    {unit.surface}
                  </p>

                  <p className="apartment-image-count">
                    {unit.images.length}{" "}
                    {unit.images.length === 1
                      ? "interior photo"
                      : "interior photos"}
                  </p>

                </div>


                {/* =========================
                    PLAN
                ========================= */}

                {unit.available &&
                unit.plan ? (
                  <a
                    href={unit.plan}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plan-button"
                  >
                    View Plan
                  </a>
                ) : (
                  <button
                    className="plan-button disabled-plan-button"
                    disabled
                  >
                    {unit.available
                      ? "Plan unavailable"
                      : "Sold Out"}
                  </button>
                )}

              </div>
            )
          }
        )}

      </div>

    </div>
  )
}

export default ApartmentUnitsSection