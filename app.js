const cors =require('cors')
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const  DBConnect= require('./config/config')
const port = process.env.PORT||5000
const userRouter =require('./Router/UserRouter')
require('dotenv').config()

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/',userRouter)



DBConnect().then(()=>{
 app.listen(port,()=>{
    console.log(port,'server connected');
  })
})
