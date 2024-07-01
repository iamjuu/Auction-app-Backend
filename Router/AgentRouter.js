
const express  = require('express')
const  router  = express.Router()
const property = require('../controller/Agent/PropertyController')
const {propertyImageupload}= require('../middleware/multer')

router.post('/addproperty',propertyImageupload.array(),property.propertyPost)


module.exports= router;