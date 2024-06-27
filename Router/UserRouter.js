const express = require("express");
const router = express.Router();
// const { propertyImageupload } = require("../middleware/multer");

const Signup = require("../controller/user/signupController");
const otp    = require("../controller/user/signupController")
const login  = require("../controller/user/signupController")

router.post("/signup", Signup.SignupPost)
      .post("/otp",otp.otpPost)
      .post("/login",login.loginPost)




module.exports = router;
