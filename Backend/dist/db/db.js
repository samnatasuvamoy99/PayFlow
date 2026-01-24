import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function connectDatabase() {
    try {
        if (!process.env.MONGODB_CONNECT_URL) {
            throw new Error("MONGODB_CONNECT_URL environment variable is not set");
        }
        await mongoose.connect(process.env.MONGODB_CONNECT_URL);
        console.log("mongodb connection is successfully completed");
        return true;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(" mongodb connection failed !!", error.message);
        }
        else {
            console.error("Unknown error", error);
        }
        return false;
    }
}
//# sourceMappingURL=db.js.map