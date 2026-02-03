import express from "express";
const userRouter = express.Router();
import { signinUser ,signupUser, updateDetailsUser ,filterUsersData} from "../controllers/user.controller.js";
import {userMiddleware} from "../middleware/auth-middleware.js"

//users...
userRouter.post("/signup",signupUser );
userRouter.post("/signin", signinUser );
userRouter.put("/update",userMiddleware, updateDetailsUser);
userRouter.get("/usersFilter" , userMiddleware , filterUsersData);

export default userRouter;





