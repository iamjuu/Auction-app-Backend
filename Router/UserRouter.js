const express = require('express')
const router = express.Router()

const {SignupGet,
    SignupPost
,LoginGet,
LoginPost}=require('../controller/UserController')

router.get('/signup',SignupGet)
      .post('/signup',SignupPost)  

      .get('/login',LoginGet)
      .post('/login',LoginPost)

module.exports = router