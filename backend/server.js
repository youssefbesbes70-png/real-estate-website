require("dotenv").config();

const sitemapRoutes =
  require("./routes/sitemapRoutes")
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();


// ======================================================
// SECURITY
// ======================================================

app.disable("x-powered-by");

app.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: "cross-origin",
    },
  })
);


// ======================================================
// CORS
// ======================================================

const frontendUrl =
  process.env.FRONTEND_URL ||
  "http://localhost:5173";

app.use(
  cors({
    origin: frontendUrl,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);


// ======================================================
// BODY PARSING
// ======================================================

app.use(
  express.json({
    limit: "1mb",
  })
);


// ======================================================
// TEST ROUTE
// ======================================================

app.get("/", (req, res) => {
  res.send(
    "Real Estate API is running"
  );
});


// ======================================================
// API ROUTES
// ======================================================

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/projects",
  projectRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/sitemap.xml",
  sitemapRoutes
)

// ======================================================
// API 404
// IMPORTANT: THIS MUST COME AFTER ALL ROUTES
// ======================================================

app.use(
  "/api",
  (req, res) => {
    res
      .status(404)
      .json({
        message:
          "API route not found",
      });
  }
);


// ======================================================
// ERROR HANDLER
// ======================================================

app.use(
  (
    error,
    req,
    res,
    next
  ) => {

    // Multer-specific errors
    if (
      error instanceof
      multer.MulterError
    ) {
      return res
        .status(400)
        .json({
          message:
            error.message,
        });
    }


    // General errors
    if (error) {
      console.error(
        "Server error:",
        error
      );

      return res
        .status(500)
        .json({
          message:
            error.message ||
            "Something went wrong",
        });
    }


    next();
  }
);


// ======================================================
// START SERVER
// ======================================================

const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  () => {
    console.log(
      `Server running on http://localhost:${PORT}`
    );

    console.log(
      `Allowed frontend: ${frontendUrl}`
    );
  }
);