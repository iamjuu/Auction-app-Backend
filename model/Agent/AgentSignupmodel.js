
const mongoose=require('mongoose');

const AgentSignupData = new mongoose.Schema({
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

const AgentsignupDatas = mongoose.model('Agentsdata',AgentSignupData)

module.exports= {

    AgentsignupDatas
}

