const pool = require("../db")

// Full project data.
// Used for one project, creating and updating.
const projectFields = `
  id,
  slug,
  title,
  location,
  status,
  price,
  apartments,

  delivery_date
    AS "deliveryDate",

  cover_image
    AS "coverImage",

  description,

  map_embed_url
    AS "mapEmbedUrl",

  project_images
    AS "projectImages",

  apartment_units
    AS "apartmentUnits"
`

// Lightweight data.
// Used for the /projects page.
const projectListFields = `
  slug,
  title,
  location,
  status,

  cover_image
    AS "coverImage"
`

// =====================================================
// GET ALL PROJECTS
// =====================================================

async function getAllProjects(req, res) {
  try {
    const result = await pool.query(`
      SELECT
        ${projectListFields}

      FROM projects

      ORDER BY id
    `)

    // Allow browsers to briefly cache the project list
    res.set(
      "Cache-Control",
      "public, max-age=60, stale-while-revalidate=300"
    )

    res.json(result.rows)
  } catch (error) {
    console.error(
      "Error getting projects:",
      error
    )

    res.status(500).json({
      message: "Server error",
    })
  }
}


// =====================================================
// GET ONE PROJECT
// =====================================================

async function getProjectBySlug(req, res) {
  try {
    const { slug } = req.params

    const result = await pool.query(
      `
      SELECT
        ${projectFields}

      FROM projects

      WHERE slug = $1
      `,
      [slug]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      })
    }

    // Individual project data can also be cached briefly
    res.set(
      "Cache-Control",
      "public, max-age=60, stale-while-revalidate=300"
    )

    res.json(result.rows[0])
  } catch (error) {
    console.error(
      "Error getting project:",
      error
    )

    res.status(500).json({
      message: "Server error",
    })
  }
}


// =====================================================
// CREATE PROJECT
// =====================================================

async function createProject(req, res) {
  try {
    const {
      slug,
      title,
      location,
      status,
      price,
      apartments,
      deliveryDate,
      coverImage,
      description,
      mapEmbedUrl,
      projectImages,
      apartmentUnits,
    } = req.body

    const result = await pool.query(
      `
      INSERT INTO projects (
        slug,
        title,
        location,
        status,
        price,
        apartments,
        delivery_date,
        cover_image,
        description,
        map_embed_url,
        project_images,
        apartment_units
      )

      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12
      )

      RETURNING
        ${projectFields}
      `,
      [
        slug,
        title,
        location,
        status,
        price,
        apartments,
        deliveryDate,
        coverImage,
        description,
        mapEmbedUrl,
        JSON.stringify(projectImages),
        JSON.stringify(apartmentUnits),
      ]
    )

    res.status(201).json(
      result.rows[0]
    )
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message:
          "A project with this slug already exists",
      })
    }

    console.error(
      "Error creating project:",
      error
    )

    res.status(500).json({
      message: "Server error",
    })
  }
}


// =====================================================
// UPDATE PROJECT
// =====================================================

async function updateProject(req, res) {
  try {
    const { slug } = req.params

    const {
      title,
      location,
      status,
      price,
      apartments,
      deliveryDate,
      coverImage,
      description,
      mapEmbedUrl,
      projectImages,
      apartmentUnits,
    } = req.body

    const result = await pool.query(
      `
      UPDATE projects

      SET
        title = $1,
        location = $2,
        status = $3,
        price = $4,
        apartments = $5,
        delivery_date = $6,
        cover_image = $7,
        description = $8,
        map_embed_url = $9,
        project_images = $10,
        apartment_units = $11

      WHERE slug = $12

      RETURNING
        ${projectFields}
      `,
      [
        title,
        location,
        status,
        price,
        apartments,
        deliveryDate,
        coverImage,
        description,
        mapEmbedUrl,
        JSON.stringify(projectImages),
        JSON.stringify(apartmentUnits),
        slug,
      ]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error(
      "Error updating project:",
      error
    )

    res.status(500).json({
      message: "Server error",
    })
  }
}


// =====================================================
// DELETE PROJECT
// =====================================================

async function deleteProject(req, res) {
  try {
    const { slug } = req.params

    const result = await pool.query(
      `
      DELETE FROM projects

      WHERE slug = $1

      RETURNING id
      `,
      [slug]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      })
    }

    res.json({
      message:
        "Project deleted successfully",
    })
  } catch (error) {
    console.error(
      "Error deleting project:",
      error
    )

    res.status(500).json({
      message: "Server error",
    })
  }
}


module.exports = {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
}