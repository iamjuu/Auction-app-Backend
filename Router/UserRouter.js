const express = require("express");
const router = express.Router();
// const { propertyImageupload } = require("../middleware/multer");

const Signup = require("../controller/user/signupController");
const otp    = require("../controller/user/Otp Controller")

router.post("/signup", Signup.SignupPost)
      .get("/otp",otp.otpGet)




module.exports = router;
