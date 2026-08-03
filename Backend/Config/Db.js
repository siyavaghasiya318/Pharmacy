import mongoose from "mongoose"

export const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECTED)
        console.log("suceessfully connected Db");
        
    } catch (error) {
        console.log("Db connection error", error);
        
    }
}