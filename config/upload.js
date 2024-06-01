const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_SECRET
})

const uploadResult = async (filepath)=>{
    try {
        const result = await cloudinary.uploader.upload(filepath)
        console.log(result);
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = {uploadResult}
