import express from "express";
const userRouter = express.Router();
import { signinUser, signupUser, updateDetailsUser, filterUsersData } from "../controllers/user.controller.js";
import { userMiddleware } from "../middleware/user-middleware.js";
userRouter.post("/signup", signupUser);
userRouter.post("/signin", signinUser);
userRouter.put("/update", userMiddleware, updateDetailsUser);
userRouter.get("/usersFilter", userMiddleware, filterUsersData);
export default userRouter;
//# sourceMappingURL=user-auth.js.map