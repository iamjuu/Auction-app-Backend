
const express  = require('express')
const  router  = express.Router()
const multer =require('multer')
const {storage}= require('../middleware/multer')
const property = require('../controller/Agent/PropertyController')
const agent = require('../controller/Agent/AgentController')

const upload =multer({storage:storage})

router.post('/addproperty',upload.array('images'),property.propertyPost)
       .get('/propertydetails',agent.propertydetails)


module.exports= router;