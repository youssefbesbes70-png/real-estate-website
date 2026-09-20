const express =
  require("express");

const {
  login,
  verify,
} = require(
  "../controllers/authController"
);

const authenticateAdmin =
  require(
    "../middleware/authenticateAdmin"
  );

const validateBody =
  require(
    "../middleware/validateBody"
  );

const loginLimiter =
  require(
    "../middleware/loginLimiter"
  );

const {
  loginSchema,
} = require(
  "../validation/schemas"
);

const router =
  express.Router();


// LOGIN
router.post(
  "/login",
  loginLimiter,
  validateBody(loginSchema),
  login
);


// VERIFY JWT
router.get(
  "/verify",
  authenticateAdmin,
  verify
);


module.exports = router;