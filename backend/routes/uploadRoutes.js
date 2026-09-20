const express =
  require("express");

const authenticateAdmin =
  require(
    "../middleware/authenticateAdmin"
  );

const {
  upload,
} = require(
  "../middleware/upload"
);

const {
  uploadImage,
} = require(
  "../controllers/uploadController"
);

const router =
  express.Router();

router.post(
  "/",
  authenticateAdmin,
  upload.single("image"),
  uploadImage
);

module.exports = router;