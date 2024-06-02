const express = require("express");
const router = express.Router();
const {propertyImageupload} = require('../middleware/multer')

const {
  SignupGet,
  SignupPost,
  LoginGet,
LoginPost,  
} = require("../controller/UserController");

const {addproductPost}=require('../controller/productController');
const { updateOne } = require("../model/User/signupmodel");
router
  .get("/signup", SignupGet)
  .post("/signup", SignupPost)

  .get("/login", LoginGet)
  .post("/login", LoginPost)

  .post("/addproperty", propertyImageupload.single('propertyImageupload'),addproductPost);
module.exports = router;
