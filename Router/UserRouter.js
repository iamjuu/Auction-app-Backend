const express = require("express");
const router = express.Router();
// const { propertyImageupload } = require("../middleware/multer");

const Signup = require("../controller/user/signupController");
const otp    = require("../controller/user/signupController")

router.post("/signup", Signup.SignupPost)
      .post("/otp",otp.otpPost)




module.exports = router;
