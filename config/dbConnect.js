const mongoose = require("mongoose")

const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://shahislam9380:9ZP3LusYz77ePvQ0@cluster0.vqjydny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("db connected successfull")
    }).catch(()=>{
        console.log("unable to connect to db")
    })
};

module.exports = dbConnection