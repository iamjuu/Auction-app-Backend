const mongoose = require('mongoose')

const property = new mongoose.Schema({

    Image: Array,

    name:{
        type:String
    },

    propertyname:{
        type:String
    },
    minimumdata:{
        type:Number
    },
    Phone:{
        type:Number
    },
    Address:{
        type:String
    },
    propertyType:{
        type:String
    },


})
const propertyData = mongoose.model('propertryData',property)

module.exports={
    propertyData
}