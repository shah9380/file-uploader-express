
const {uploadResult} = require("../config/upload.js")
const Store = require("../models/fileUploadModel.js")

const uploadFile = async (req, res)=>{
    try {
        const upload = await uploadResult(req.file.path);
        var store = new Store({
            file_url : upload.secure_url
        })
        var record = await store.save();
        res.status(200).send({success : true, msg: 'File uploaded succesfully', url: record})
    } catch (error) {
        res.status(400).send({
            message : error,
            success : false
        })
    }
}



module.exports = {uploadFile}