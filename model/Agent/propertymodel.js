const mongoose = require('mongoose')

const property = new mongoose.Schema({

    images:{
        type:Array
    },

    name:{
        type:String
    },
    propertyname:{
        type:String
    },
    minimumdata:{
        type:String
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