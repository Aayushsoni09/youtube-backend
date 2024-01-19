import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"          

cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret:CLOUDINARY_API_PASSWORD,  
});

const uploadOnCloudinary = async(localfilepath)=>{
  try {
    if (!localfilepath) return null;
    const response = await cloudinary.uploader.upload(localfilepath,{resource_type:auto})
    fs.unlinkSync(localfilepath)
    return response 
  } catch (error) {
    fs.unlinkSync(localfilepath) // remove the locally saved temporary file as the upload operation got failed
    return null
  }
}

export default uploadOnCloudinary