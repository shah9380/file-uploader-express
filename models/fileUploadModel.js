const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

var fileSchema = new mongoose.Schema({
    file_url : {
        type: String,
        required: true
    }
})

//before saving we can hash the url or password

// fileSchema.pre("save", async function (next){
//     if(!this.isModified("file_url")){
//         next();
//     }
//     const salt = bcrypt.genSaltSync(10);
//     this.file_url = await bcrypt.hash(this.file_url, salt);
// })

module.exports = mongoose.model("Store", fileSchema);