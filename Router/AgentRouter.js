
const express  = require('express')
const  router  = express.Router()
const property = require('../controller/Agent/PropertyController')

router.post('/addproperty',property.propertyPost)


module.exports= router;