const cors =require('cors')
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const  DBConnect= require('./config/config')
const port = process.env.PORT||5000
const userRouter =require('./Router/UserRouter')
const session = require('express-session');
require('dotenv').config()



app.use(session({
  secret: 'juu',
  resave: false,
  saveUninitialized: true,
}));


const corsOptions = {
  origin: "http://localhost:5173",  
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',userRouter)




DBConnect().then(()=>{
 app.listen(port,()=>{
    console.log(port,'server connected');
  })
})
