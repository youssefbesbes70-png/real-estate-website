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
  onOpenLightbox: (apartmentIndex: number, imageIndex?: number) => void
}

function ApartmentUnitsSection({
  title,
  apartmentUnits,
  onOpenLightbox,
}: ApartmentUnitsSectionProps) {
  const sortedApartmentUnits = [...apartmentUnits].sort((a, b) => {
    if (a.available === b.available) return 0
    return a.available ? -1 : 1
  })

  return (
    <div className="project-gallery">
      <h2>Apartment Interior Views</h2>

      <div className="apartment-units-grid">
        {sortedApartmentUnits.map((unit, index) => (
          <div
            key={index}
            className={`apartment-unit-card ${
              unit.available ? "" : "apartment-unit-card-sold"
            }`}
          >
            <div className="apartment-unit-header">
              <h3>{unit.type}</h3>
              <span
                className={
                  unit.available
                    ? "apartment-status available-unit"
                    : "apartment-status sold-unit"
                }
              >
                {unit.available ? "Available" : "Sold"}
              </span>
            </div>

            <img
              src={unit.images[0]}
              alt={`${title} ${unit.type}`}
              className="gallery-image"
              onClick={() => onOpenLightbox(index, 0)}
            />

            <div className="apartment-unit-details">
              <p>
                <strong>Floor:</strong> {unit.floor}
              </p>
              <p>
                <strong>Surface:</strong> {unit.surface}
              </p>
              <p className="apartment-image-count">
                {unit.images.length} interior photos
              </p>
            </div>

            {unit.available ? (
              <a
                href={unit.plan}
                target="_blank"
                rel="noreferrer"
                className="plan-button"
              >
                View Plan
              </a>
            ) : (
              <button className="plan-button disabled-plan-button" disabled>
                Sold Out
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApartmentUnitsSection