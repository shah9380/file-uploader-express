const express = require("express")
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

const uploadRouter = require("./router/uploadFile.js")
const dbConnection = require("./config/dbConnect.js")

app

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

dbConnection();

app.use("/",uploadRouter);


app.listen(PORT, ()=>{
    console.log('port listening at',PORT);
})