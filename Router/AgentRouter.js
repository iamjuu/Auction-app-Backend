
const express  = require('express')
const  router  = express.Router()
const multer =require('multer')
const property = require('../controller/Agent/PropertyController')
const {storage}= require('../middleware/multer')

const upload =multer({storage:storage})

router.post('/addproperty',upload.array('images'),property.propertyPost)


module.exports= router;