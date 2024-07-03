const {propertyData} = require('../../model/Agent/propertymodel')


module.exports={
    propertyPost:async(req,res) =>{
const {name,propertyname,minimumdata,Phone,Address,propertyType} = req.body
const propertyImage = req.files
const Data={
    name:name,
    propertyname:propertyname,
    minimumdata:minimumdata,
    Phone:Phone,
    Address:Address,
    propertyType:propertyType,
    images:propertyImage
}
console.log(Data,'form');
    const newData = new propertyData(Data)
    await newData.save()
    }
}