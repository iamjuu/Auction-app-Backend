const {propertyData}=require('../../model/Agent/propertymodel')

module.exports={
propertydetails: async(req,res)=>{
 try {
    const Data = await propertyData.find()
res.status(200).json({message:true,PropertyDatas:Data})
 } catch (error) {
    console.log(error,'error in properties data passeing to frontend check into the agent Controller');
 }
}
}