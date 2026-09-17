const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Real Estate API is running");
});

// GET all projects
app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        slug,
        title,
        location,
        status,
        price,
        apartments,
        delivery_date AS "deliveryDate",
        cover_image AS "coverImage",
        description,
        map_embed_url AS "mapEmbedUrl",
        project_images AS "projectImages",
        apartment_units AS "apartmentUnits"
      FROM projects
      ORDER BY id
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error getting projects:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// POST create a new project
app.post("/api/projects", async (req, res) => {
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
      projectImages = [],
      apartmentUnits = [],
    } = req.body;

    if (!slug || !title) {
      return res.status(400).json({
        message: "Slug and title are required",
      });
    }

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
        $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11, $12
      )
      RETURNING
        id,
        slug,
        title,
        location,
        status,
        price,
        apartments,
        delivery_date AS "deliveryDate",
        cover_image AS "coverImage",
        description,
        map_embed_url AS "mapEmbedUrl",
        project_images AS "projectImages",
        apartment_units AS "apartmentUnits"
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
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "A project with this slug already exists",
      });
    }

    console.error("Error creating project:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// GET one project by slug
app.get("/api/projects/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      `
      SELECT
        id,
        slug,
        title,
        location,
        status,
        price,
        apartments,
        delivery_date AS "deliveryDate",
        cover_image AS "coverImage",
        description,
        map_embed_url AS "mapEmbedUrl",
        project_images AS "projectImages",
        apartment_units AS "apartmentUnits"
      FROM projects
      WHERE slug = $1
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error getting project:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// DELETE one project by slug
app.delete("/api/projects/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      `
      DELETE FROM projects
      WHERE slug = $1
      RETURNING *
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

const PORT = 5000;

// UPDATE a project by slug
app.put("/api/projects/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

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
      projectImages = [],
      apartmentUnits = [],
    } = req.body;

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
        id,
        slug,
        title,
        location,
        status,
        price,
        apartments,
        delivery_date AS "deliveryDate",
        cover_image AS "coverImage",
        description,
        map_embed_url AS "mapEmbedUrl",
        project_images AS "projectImages",
        apartment_units AS "apartmentUnits"
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
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating project:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
