
const mongoose=require('mongoose');

const SignupData = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const signupData = mongoose.model('usersdata',SignupData)

module.exports= {

    signupData
}

