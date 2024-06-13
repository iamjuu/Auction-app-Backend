const express = require("express");
const router = express.Router();
const { propertyImageupload } = require("../middleware/multer");

const {
  SignupPost,
} = require("../controller/user/signupController");

router
  .post("/signup", SignupPost)

  // .get("/login", LoginGet)
  // .post("/login", LoginPost);

module.exports = router;
