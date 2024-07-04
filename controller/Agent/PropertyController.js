const {propertyData} = require('../../model/Agent/propertymodel')


module.exports={
    propertyPost:async(req,res) =>{
  try {           
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
    const newData = new propertyData(Data)
    await newData.save()
    console.log(newData,' new data');
    res.status(200).json({message:true})
    }catch (error) {
           console.log(error,'error in agent property post');   
}
    }
}