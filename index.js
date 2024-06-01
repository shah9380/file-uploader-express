const express = require("express")
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")

const cloudinary = require('cloudinary').v2

const app = express();


app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


app.listen(4000, ()=>{
    console.log('port listening at 4000');
})