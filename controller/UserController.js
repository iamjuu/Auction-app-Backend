const UserSchema =require('../model/User/signupmodel')

module.exports = {
SignupGet:(req,res)=> {
    try {
        
    } catch (error) {
        console.log(error,'error in Signup get ');
    }
},
SignupPost: async(req,res)=> {
try { console.log('ajmal')

const {Name,email,password}=req.body

const Data={
    name:Name,
    email:email,
    password:password
}
console.log(Data,'signup data');
const newData =   new UserSchema(Data)
await newData.save()
res.status(200).json({ success: true });
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
        console.log(req.body,'login data');
        const {email,password} = req.body
        
    } catch (error) {
     console.log(error,'error in login post');   
    }

},
}