const express = require("express");
const { uploadFile } = require("../controller/uploadCtrl");
const path = require("path")
const multer = require("multer")


var uploader  = multer({
    storage : multer.diskStorage({}),
    limits : {fieldSize : 500000}
})

const router = express.Router();

router.get('/',(req, res)=>{
    res.status(200).send({
        status: true,
    })
})
//file is the key name comes from the header
router.post('/file-upload',uploader.single("file"),uploadFile)


module.exports = router;