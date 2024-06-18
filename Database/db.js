import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const DBconnect = async()=>{
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("mongodb Connected Successfully")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
    
}
export default DBconnect;