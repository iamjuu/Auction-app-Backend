
const mongoose=require('mongoose');

const User = new mongoose.Schema({
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

const UserSchema = mongoose.model('usersdata',User)

module.exports= UserSchema

