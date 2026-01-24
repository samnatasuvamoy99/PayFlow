import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDatabase } from "./db/db.js";
import { userRoute } from "./routes/user-auth.js";
const app = express();
app.use(express.json());
const port = 3000;
app.use("/api/user/auth", userRoute);
async function StartServer() {
    const isConnected = await connectDatabase();
    if (!isConnected) {
        console.log("Database connection failed !!");
        process.exit(1);
    }
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
StartServer();
//# sourceMappingURL=index.js.map