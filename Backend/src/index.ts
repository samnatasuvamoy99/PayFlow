dotenv.config();
import dotenv from "dotenv";
import express from "express";
import { connectDatabase } from "./db/db.js"
import cors from "cors"
import  userRouter  from "./routes/user.routes.js";
import bankRouter from "./routes/bank.routes.js";
const app = express();
app.use(cors())
app.use(express.json());
const port = 3000;


app.use("/api/v1/user/auth", userRouter);
app.use("/api/v2/account" , bankRouter);

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