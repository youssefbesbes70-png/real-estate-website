const express =
  require("express");

const {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
} = require(
  "../controllers/projectController"
);

const authenticateAdmin =
  require(
    "../middleware/authenticateAdmin"
  );

const validateBody =
  require(
    "../middleware/validateBody"
  );

const {
  createProjectSchema,
  updateProjectSchema,
} = require(
  "../validation/schemas"
);

const router =
  express.Router();


// Public
router.get(
  "/",
  getAllProjects
);


// Protected
router.post(
  "/",
  authenticateAdmin,
  validateBody(
    createProjectSchema
  ),
  createProject
);


// Public
router.get(
  "/:slug",
  getProjectBySlug
);


// Protected
router.put(
  "/:slug",
  authenticateAdmin,
  validateBody(
    updateProjectSchema
  ),
  updateProject
);


// Protected
router.delete(
  "/:slug",
  authenticateAdmin,
  deleteProject
);


module.exports = router;