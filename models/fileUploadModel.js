const mongoose = require("mongoose")

var fileSchema = new mongoose.Schema({
    file_url : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Store", fileSchema);