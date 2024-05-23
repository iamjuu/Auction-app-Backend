
const cors= require('cors') 
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cache = require("nocache");
const session = require("express-session");
const  DBConnect = require('./config/config')
const port = process.env.PORT||5000
require('dotenv').config()
DBConnect()


app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mee",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 300000,
    },
  })
);
app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.json());
app.set("views", path.join(__dirname, "views"));

app.listen(port,()=>{
  console.log('server connected');
})