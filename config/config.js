const mongoose = require('mongoose')

const DBConnect= async ()=>{
    try{

       const connect   =  mongoose.connect('mongodb://127.0.0.1/Auction-App').then(()=>{
            console.log('connected')
        })
       
    }catch(err){
        console.log(err);
        console.log("error in db connetion");
    }
}






module.exports=DBConnect