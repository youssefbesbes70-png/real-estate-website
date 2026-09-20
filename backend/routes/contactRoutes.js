const express = require("express");

const {
  createContactMessage,
  getContactMessages,
  markMessageAsRead,
  deleteContactMessage,
} = require(
  "../controllers/contactController"
);

const validateBody =
  require("../middleware/validateBody");

const contactLimiter =
  require("../middleware/contactLimiter");

const authenticateAdmin =
  require("../middleware/authenticateAdmin");

const {
  contactSchema,
} = require(
  "../validation/schemas"
);


const router = express.Router();


// ======================================================
// SEND MESSAGE
// PUBLIC
// ======================================================

router.post(
  "/",
  contactLimiter,
  validateBody(contactSchema),
  createContactMessage
);


// ======================================================
// GET ALL MESSAGES
// ADMIN ONLY
// ======================================================

router.get(
  "/",
  authenticateAdmin,
  getContactMessages
);


// ======================================================
// MARK MESSAGE AS READ
// ADMIN ONLY
// ======================================================

router.patch(
  "/:id/read",
  authenticateAdmin,
  markMessageAsRead
);


// ======================================================
// DELETE MESSAGE
// ADMIN ONLY
// ======================================================

router.delete(
  "/:id",
  authenticateAdmin,
  deleteContactMessage
);


module.exports = router;