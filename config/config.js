const mongoose = require('mongoose')

const DBConnect= async ()=>{
    try{
        const connect = await  mongoose.connect(process.env.mongoURL)
    }catch(err){
        console.log("error in db connetion");
    }
}


module.exports=DBConnect