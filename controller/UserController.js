const UserSchema =require('../model/User/signupmodel')

module.exports = {
SignupGet:(req,res)=> {
    try {
        
    } catch (error) {
        console.log(error,'error in Signup get ');
    }
},
SignupPost: async(req,res)=> {
try {
    
    res.status(200).json({ success: true });
const {Name,email,password}=req.body

const Data={
    name:Name,
    email:email,
    password:password
}
console.log(Data,'DATAA');
const newData =   new UserSchema(Data)
console.log(newData,'new');
await newData.save()
} catch (error) {
    console.log(error,'error in signup post');
    
}
},



LoginGet:(req,res)=>{

},
LoginPost:async(req,res)=>{
    console.log('1342');
    try {
        res.status(200).json({ success: true });
        console.log(req.body,'dodyyyy');
        const {email,password} = req.body
        
    } catch (error) {
     console.log(error,'error in login post');   
    }

},
}