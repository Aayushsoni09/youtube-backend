import { DB_NAME } from "../constants.js";
import mongoose from "mongoose"

const connectDB =async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("ERROR in connecting database : " ,error);
        process.exit(1)

    }
}

export default connectDB