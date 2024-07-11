const {propertyData}=require('../../model/Agent/propertymodel')
module.exports={
propertydetails: async(req,res)=>{
 try {
    const Data = await propertyData.find()
res.status(200).json({message:true,PropertyDatas:Data})
 } catch (error) {
    console.log(error,'error in properties data passeing to frontend check into the agent Controller');
 }
},

userDelete: async(req,res) => {
   try {
   const id = req.query.id;
  await propertyData.deleteOne({_id:id})
    res.status(200).json({message:true})
   } catch (err) {
      console.log(err,'error in user deleting check in agent controller');
   }
}
}