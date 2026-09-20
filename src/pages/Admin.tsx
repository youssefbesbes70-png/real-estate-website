import API_URL from "../config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ImageUpload from "../components/ImageUpload"

type ApartmentUnit = {
  type: string
  images: string[]
  plan: string
  available: boolean
  floor: string
  surface: string
}

type Project = {
  id: number
  slug: string
  title: string
  location: string
  status: string
  price: string
  apartments: number
  deliveryDate: string
  coverImage: string
  description: string
  mapEmbedUrl: string
  projectImages: string[]
  apartmentUnits: ApartmentUnit[]
}

type ProjectForm = {
  slug: string
  title: string
  location: string
  status: string
  price: string
  apartments: number
  deliveryDate: string
  coverImage: string
  description: string
  mapEmbedUrl: string
  projectImages: string[]
  apartmentUnits: ApartmentUnit[]
}

type ContactMessage = {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  isRead: boolean
  createdAt: string
}

type AdminSection = "projects" | "messages"

const createEmptyProject = (): ProjectForm => ({
  slug: "",
  title: "",
  location: "",
  status: "available",
  price: "",
  apartments: 0,
  deliveryDate: "",
  coverImage: "",
  description: "",
  mapEmbedUrl: "",
  projectImages: [],
  apartmentUnits: [],
})

function Admin() {
  const navigate = useNavigate()

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const [activeSection, setActiveSection] =
    useState<AdminSection>("projects")

  const [messages, setMessages] =
    useState<ContactMessage[]>([])

  const [messagesLoading, setMessagesLoading] =
    useState(false)

  const [messagesError, setMessagesError] =
    useState("")

  const [showForm, setShowForm] = useState(false)

  const [editingSlug, setEditingSlug] =
    useState<string | null>(null)

  const [formData, setFormData] =
    useState<ProjectForm>(createEmptyProject())

  // =====================================================
  // AUTH
  // =====================================================

  const getToken = () => {
    return localStorage.getItem("adminToken")
  }

  const logout = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin/login")
  }

  const handleUnauthorized = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin/login")
  }

  // =====================================================
  // GET PROJECTS
  // =====================================================

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/api/projects`)

      if (!response.ok) {
        throw new Error("Could not load projects")
      }

      const data = await response.json()

      setProjects(data)
    } catch (error) {
      console.error(
        "Error loading projects:",
        error
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  // =====================================================
  // GET CONTACT MESSAGES
  // =====================================================

  const fetchMessages = async () => {
    const token = getToken()

    if (!token) {
      handleUnauthorized()
      return
    }

    setMessagesLoading(true)
    setMessagesError("")

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        const data = await response.json()

        throw new Error(
          data.message ||
            "Could not load messages"
        )
      }

      const data = await response.json()
      setMessages(data)
    } catch (error) {
      console.error(
        "Error loading messages:",
        error
      )

      setMessagesError(
        error instanceof Error
          ? error.message
          : "Could not load messages"
      )
    } finally {
      setMessagesLoading(false)
    }
  }

  const openProjectsSection = () => {
    setActiveSection("projects")
    setShowForm(false)
  }

  const openMessagesSection = async () => {
    setActiveSection("messages")
    setShowForm(false)
    await fetchMessages()
  }

  // =====================================================
  // MARK CONTACT MESSAGE AS READ
  // =====================================================

  const markMessageAsRead = async (id: number) => {
    const token = getToken()

    if (!token) {
      handleUnauthorized()
      return
    }

    try {
      const response = await fetch(
        `${API_URL}/api/contact/${id}/read`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        const data = await response.json()

        throw new Error(
          data.message ||
            "Could not mark message as read"
        )
      }

      setMessages((previous) =>
        previous.map((contactMessage) =>
          contactMessage.id === id
            ? {
                ...contactMessage,
                isRead: true,
              }
            : contactMessage
        )
      )
    } catch (error) {
      console.error(
        "Error marking message as read:",
        error
      )

      alert(
        error instanceof Error
          ? error.message
          : "Could not mark message as read"
      )
    }
  }

  // =====================================================
  // DELETE CONTACT MESSAGE
  // =====================================================

  const deleteMessage = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    )

    if (!confirmed) {
      return
    }

    const token = getToken()

    if (!token) {
      handleUnauthorized()
      return
    }

    try {
      const response = await fetch(
        `${API_URL}/api/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        const data = await response.json()

        throw new Error(
          data.message ||
            "Could not delete message"
        )
      }

      setMessages((previous) =>
        previous.filter(
          (contactMessage) =>
            contactMessage.id !== id
        )
      )
    } catch (error) {
      console.error(
        "Error deleting message:",
        error
      )

      alert(
        error instanceof Error
          ? error.message
          : "Could not delete message"
      )
    }
  }

  const unreadMessages = messages.filter(
    (contactMessage) => !contactMessage.isRead
  ).length

  // =====================================================
  // BASIC PROJECT FIELDS
  // =====================================================

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,

      [name]:
        name === "apartments"
          ? Number(value)
          : value,
    }))
  }

  // =====================================================
  // PROJECT IMAGES
  // =====================================================

  const addProjectImage = () => {
    setFormData((previous) => ({
      ...previous,

      projectImages: [
        ...previous.projectImages,
        "",
      ],
    }))
  }

  const updateProjectImage = (
    index: number,
    url: string
  ) => {
    setFormData((previous) => {
      const newImages = [
        ...previous.projectImages,
      ]

      newImages[index] = url

      return {
        ...previous,
        projectImages: newImages,
      }
    })
  }

  const removeProjectImage = (
    index: number
  ) => {
    setFormData((previous) => ({
      ...previous,

      projectImages:
        previous.projectImages.filter(
          (_, imageIndex) =>
            imageIndex !== index
        ),
    }))
  }

  // =====================================================
  // APARTMENTS
  // =====================================================

  const addApartment = () => {
    const newApartment: ApartmentUnit = {
      type: "",
      images: [],
      plan: "",
      available: true,
      floor: "",
      surface: "",
    }

    setFormData((previous) => ({
      ...previous,

      apartmentUnits: [
        ...previous.apartmentUnits,
        newApartment,
      ],
    }))
  }

  const updateApartment = (
    apartmentIndex: number,
    field: keyof ApartmentUnit,
    value: string | boolean
  ) => {
    setFormData((previous) => ({
      ...previous,

      apartmentUnits:
        previous.apartmentUnits.map(
          (apartment, index) =>
            index === apartmentIndex
              ? {
                  ...apartment,
                  [field]: value,
                }
              : apartment
        ),
    }))
  }

  const removeApartment = (
    apartmentIndex: number
  ) => {
    setFormData((previous) => ({
      ...previous,

      apartmentUnits:
        previous.apartmentUnits.filter(
          (_, index) =>
            index !== apartmentIndex
        ),
    }))
  }

  // =====================================================
  // APARTMENT IMAGES
  // =====================================================

  const addApartmentImage = (
    apartmentIndex: number
  ) => {
    setFormData((previous) => ({
      ...previous,

      apartmentUnits:
        previous.apartmentUnits.map(
          (apartment, index) =>
            index === apartmentIndex
              ? {
                  ...apartment,

                  images: [
                    ...apartment.images,
                    "",
                  ],
                }
              : apartment
        ),
    }))
  }

  const updateApartmentImage = (
    apartmentIndex: number,
    imageIndex: number,
    url: string
  ) => {
    setFormData((previous) => ({
      ...previous,

      apartmentUnits:
        previous.apartmentUnits.map(
          (apartment, index) => {
            if (index !== apartmentIndex) {
              return apartment
            }

            const newImages = [
              ...apartment.images,
            ]

            newImages[imageIndex] = url

            return {
              ...apartment,
              images: newImages,
            }
          }
        ),
    }))
  }

  const removeApartmentImage = (
    apartmentIndex: number,
    imageIndex: number
  ) => {
    setFormData((previous) => ({
      ...previous,

      apartmentUnits:
        previous.apartmentUnits.map(
          (apartment, index) =>
            index === apartmentIndex
              ? {
                  ...apartment,

                  images:
                    apartment.images.filter(
                      (_, index) =>
                        index !== imageIndex
                    ),
                }
              : apartment
        ),
    }))
  }

  // =====================================================
  // CREATE FORM
  // =====================================================

  const openCreateForm = () => {
    setEditingSlug(null)
    setFormData(createEmptyProject())
    setShowForm(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // =====================================================
  // EDIT FORM
  // =====================================================

  const openEditForm = (
    project: Project
  ) => {
    setEditingSlug(project.slug)

    setFormData({
      slug: project.slug,
      title: project.title,
      location: project.location,
      status: project.status,
      price: project.price,
      apartments: project.apartments,
      deliveryDate:
        project.deliveryDate ?? "",
      coverImage:
        project.coverImage ?? "",
      description:
        project.description ?? "",
      mapEmbedUrl:
        project.mapEmbedUrl ?? "",
      projectImages:
        project.projectImages ?? [],
      apartmentUnits:
        project.apartmentUnits ?? [],
    })

    setShowForm(true)

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // =====================================================
  // CLOSE FORM
  // =====================================================

  const closeForm = () => {
    setShowForm(false)
    setEditingSlug(null)
    setFormData(createEmptyProject())
  }

  // =====================================================
  // CREATE / UPDATE PROJECT
  // =====================================================

  const saveProject = async (
    event: React.FormEvent
  ) => {
    event.preventDefault()

    const token = getToken()

    if (!token) {
      handleUnauthorized()
      return
    }

    try {
      const url = editingSlug
      ? `${API_URL}/api/projects/${editingSlug}`
      : `${API_URL}/api/projects`

      const method = editingSlug
        ? "PUT"
        : "POST"

      const response = await fetch(
        url,
        {
          method,

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify(
            formData
          ),
        }
      )

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        const data =
          await response.json()

        throw new Error(
          data.message ||
          "Could not save project"
        )
      }

      alert(
        editingSlug
          ? "Project updated successfully"
          : "Project created successfully"
      )

      closeForm()

      await fetchProjects()
    } catch (error) {
      console.error(
        "Error saving project:",
        error
      )

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      )
    }
  }

  // =====================================================
  // DELETE PROJECT
  // =====================================================

  const deleteProject = async (
    slug: string
  ) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this project?"
      )

    if (!confirmed) {
      return
    }

    const token = getToken()

    if (!token) {
      handleUnauthorized()
      return
    }

    try {
      const response = await fetch(
        `${API_URL}/api/projects/${slug}`,
        {
          method: "DELETE",

          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      )

      if (response.status === 401) {
        handleUnauthorized()
        return
      }

      if (!response.ok) {
        const data =
          await response.json()

        throw new Error(
          data.message ||
          "Could not delete project"
        )
      }

      await fetchProjects()
    } catch (error) {
      console.error(
        "Error deleting project:",
        error
      )

      alert(
        error instanceof Error
          ? error.message
          : "Could not delete project"
      )
    }
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <h2
        style={{
          padding: "40px",
        }}
      >
        Loading...
      </h2>
    )
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* ADMIN SECTIONS */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <button
          type="button"
          onClick={openProjectsSection}
          disabled={activeSection === "projects"}
        >
          Projects
        </button>

        <button
          type="button"
          onClick={openMessagesSection}
          disabled={activeSection === "messages"}
        >
          Messages
          {unreadMessages > 0
            ? ` (${unreadMessages} unread)`
            : ""}
        </button>
      </div>

      {/* ADD PROJECT BUTTON */}

      {activeSection === "projects" &&
        !showForm && (
          <button
            onClick={openCreateForm}
            style={{
              marginBottom: "30px",
            }}
          >
            + Add Project
          </button>
        )}

      {/* =================================================
          CREATE / EDIT FORM
      ================================================= */}

      {activeSection === "projects" &&
        showForm && (
        <form
          onSubmit={saveProject}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            maxWidth: "800px",
            marginBottom: "40px",
          }}
        >
          <h2>
            {editingSlug
              ? "Edit Project"
              : "Add Project"}
          </h2>

          {/* TITLE */}

          <input
            name="title"
            placeholder="Project title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          {/* SLUG */}

          <input
            name="slug"
            placeholder="Slug (example: green-city)"
            value={formData.slug}
            onChange={handleChange}
            required
            disabled={
              editingSlug !== null
            }
          />

          {/* LOCATION */}

          <input
            name="location"
            placeholder="Location"
            value={
              formData.location
            }
            onChange={handleChange}
          />

          {/* STATUS */}

          <select
            name="status"
            value={
              formData.status
            }
            onChange={handleChange}
          >
            <option value="available">
              Available
            </option>

            <option value="sold">
              Sold
            </option>
          </select>

          {/* PRICE */}

          <input
            name="price"
            placeholder="Price"
            value={
              formData.price
            }
            onChange={handleChange}
          />

          {/* APARTMENTS NUMBER */}

          <input
            name="apartments"
            type="number"
            placeholder="Number of apartments"
            value={
              formData.apartments
            }
            onChange={handleChange}
          />

          {/* DELIVERY DATE */}

          <input
            name="deliveryDate"
            placeholder="Delivery date"
            value={
              formData.deliveryDate
            }
            onChange={handleChange}
          />

          {/* COVER IMAGE */}

          <ImageUpload
            label="Cover Image"
            value={
              formData.coverImage
            }
            onUpload={(url) =>
              setFormData(
                (previous) => ({
                  ...previous,
                  coverImage: url,
                })
              )
            }
          />

          {/* DESCRIPTION */}

          <textarea
            name="description"
            placeholder="Project description"
            value={
              formData.description
            }
            onChange={handleChange}
            rows={5}
          />

          {/* MAP */}

          <input
            name="mapEmbedUrl"
            placeholder="Google Maps embed URL"
            value={
              formData.mapEmbedUrl
            }
            onChange={handleChange}
          />

          {/* =================================================
              PROJECT IMAGES
          ================================================= */}

          <hr />

          <h2>
            Project Images
          </h2>

          {formData.projectImages.map(
            (image, index) => (
              <div
                key={index}
                style={{
                  border:
                    "1px solid #ddd",
                  padding: "15px",
                }}
              >
                <ImageUpload
                  label={`Project Image ${
                    index + 1
                  }`}
                  value={image}
                  onUpload={(url) =>
                    updateProjectImage(
                      index,
                      url
                    )
                  }
                />

                <button
                  type="button"
                  onClick={() =>
                    removeProjectImage(
                      index
                    )
                  }
                >
                  Remove Image
                </button>
              </div>
            )
          )}

          <button
            type="button"
            onClick={
              addProjectImage
            }
          >
            + Add Project Image
          </button>

          {/* =================================================
              APARTMENT UNITS
          ================================================= */}

          <hr />

          <h2>
            Apartment Units
          </h2>

          {formData.apartmentUnits.map(
            (
              apartment,
              apartmentIndex
            ) => (
              <div
                key={
                  apartmentIndex
                }
                style={{
                  border:
                    "1px solid #ccc",

                  padding: "20px",

                  marginBottom:
                    "20px",

                  display: "flex",

                  flexDirection:
                    "column",

                  gap: "12px",
                }}
              >
                <h3>
                  Apartment{" "}
                  {apartmentIndex +
                    1}
                </h3>

                {/* TYPE */}

                <input
                  placeholder="Type (example: S+2)"
                  value={
                    apartment.type
                  }
                  onChange={(
                    event
                  ) =>
                    updateApartment(
                      apartmentIndex,
                      "type",
                      event.target
                        .value
                    )
                  }
                />

                {/* FLOOR */}

                <input
                  placeholder="Floor"
                  value={
                    apartment.floor
                  }
                  onChange={(
                    event
                  ) =>
                    updateApartment(
                      apartmentIndex,
                      "floor",
                      event.target
                        .value
                    )
                  }
                />

                {/* SURFACE */}

                <input
                  placeholder="Surface (example: 85 m²)"
                  value={
                    apartment.surface
                  }
                  onChange={(
                    event
                  ) =>
                    updateApartment(
                      apartmentIndex,
                      "surface",
                      event.target
                        .value
                    )
                  }
                />

                {/* AVAILABLE */}

                <label>
                  <input
                    type="checkbox"
                    checked={
                      apartment.available
                    }
                    onChange={(
                      event
                    ) =>
                      updateApartment(
                        apartmentIndex,
                        "available",
                        event.target
                          .checked
                      )
                    }
                  />

                  {" "}
                  Available
                </label>

                {/* PLAN */}

                <ImageUpload
                  label="Apartment Plan"
                  value={
                    apartment.plan
                  }
                  onUpload={(url) =>
                    updateApartment(
                      apartmentIndex,
                      "plan",
                      url
                    )
                  }
                />

                {/* APARTMENT IMAGES */}

                <h4>
                  Apartment Images
                </h4>

                {apartment.images.map(
                  (
                    image,
                    imageIndex
                  ) => (
                    <div
                      key={
                        imageIndex
                      }
                      style={{
                        border:
                          "1px solid #ddd",

                        padding:
                          "10px",
                      }}
                    >
                      <ImageUpload
                        label={`Apartment Image ${
                          imageIndex +
                          1
                        }`}
                        value={
                          image
                        }
                        onUpload={(
                          url
                        ) =>
                          updateApartmentImage(
                            apartmentIndex,
                            imageIndex,
                            url
                          )
                        }
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeApartmentImage(
                            apartmentIndex,
                            imageIndex
                          )
                        }
                      >
                        Remove Image
                      </button>
                    </div>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    addApartmentImage(
                      apartmentIndex
                    )
                  }
                >
                  + Add Apartment Image
                </button>

                <button
                  type="button"
                  onClick={() =>
                    removeApartment(
                      apartmentIndex
                    )
                  }
                >
                  Delete Apartment
                </button>
              </div>
            )
          )}

          <button
            type="button"
            onClick={
              addApartment
            }
          >
            + Add Apartment Unit
          </button>

          <hr />

          {/* SAVE / CANCEL */}

          <div>
            <button
              type="submit"
              style={{
                marginRight:
                  "10px",
              }}
            >
              {editingSlug
                ? "Save Changes"
                : "Create Project"}
            </button>

            <button
              type="button"
              onClick={
                closeForm
              }
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* =================================================
          PROJECT LIST
      ================================================= */}

      {activeSection === "projects" &&
        !showForm &&
        projects.map(
          (project) => (
            <div
              key={project.id}
              style={{
                border:
                  "1px solid #ccc",

                padding: "20px",

                marginBottom:
                  "15px",
              }}
            >
              {project.coverImage && (
                <img
                  src={
                    project.coverImage
                  }
                  alt={
                    project.title
                  }
                  style={{
                    width: "250px",

                    height: "150px",

                    objectFit:
                      "cover",

                    marginBottom:
                      "10px",
                  }}
                />
              )}

              <h2>
                {project.title}
              </h2>

              <p>
                {project.location}
              </p>

              <p>
                Status:{" "}
                <strong>
                  {
                    project.status
                  }
                </strong>
              </p>

              <p>
                {project.price}
              </p>

              <button
                onClick={() =>
                  openEditForm(
                    project
                  )
                }
                style={{
                  marginRight:
                    "10px",
                }}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deleteProject(
                    project.slug
                  )
                }
              >
                Delete
              </button>
            </div>
          )
        )}

      {/* =================================================
          CONTACT MESSAGES
      ================================================= */}

      {activeSection === "messages" && (
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2>Contact Messages</h2>

            <button
              type="button"
              onClick={fetchMessages}
              disabled={messagesLoading}
            >
              {messagesLoading
                ? "Refreshing..."
                : "Refresh"}
            </button>
          </div>

          {messagesLoading &&
            messages.length === 0 && (
              <p>Loading messages...</p>
            )}

          {messagesError && (
            <p
              style={{
                color: "crimson",
                marginBottom: "20px",
              }}
            >
              {messagesError}
            </p>
          )}

          {!messagesLoading &&
            !messagesError &&
            messages.length === 0 && (
              <p>No messages yet.</p>
            )}

          {messages.map((contactMessage) => (
            <div
              key={contactMessage.id}
              style={{
                border: contactMessage.isRead
                  ? "1px solid #ccc"
                  : "2px solid #333",
                backgroundColor: contactMessage.isRead
                  ? "transparent"
                  : "#f5f8ff",
                padding: "20px",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontWeight: contactMessage.isRead
                      ? 500
                      : 700,
                  }}
                >
                  {contactMessage.subject ||
                    "No subject"}
                </h3>

                <strong>
                  {contactMessage.isRead
                    ? "Read"
                    : "Unread"}
                </strong>
              </div>

              <p>
                <strong>Name:</strong>{" "}
                {contactMessage.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactMessage.email}`}>
                  {contactMessage.email}
                </a>
              </p>

              {contactMessage.phone && (
                <p>
                  <strong>Phone:</strong>{" "}
                  {contactMessage.phone}
                </p>
              )}

              <p>
                <strong>Date:</strong>{" "}
                {new Date(
                  contactMessage.createdAt
                ).toLocaleString()}
              </p>

              <p
                style={{
                  whiteSpace: "pre-wrap",
                }}
              >
                <strong>Message:</strong>{" "}
                {contactMessage.message}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >
                {!contactMessage.isRead && (
                  <button
                    type="button"
                    onClick={() =>
                      markMessageAsRead(
                        contactMessage.id
                      )
                    }
                  >
                    Mark as Read
                  </button>
                )}

                <button
                  type="button"
                  onClick={() =>
                    deleteMessage(
                      contactMessage.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}

export default Admin