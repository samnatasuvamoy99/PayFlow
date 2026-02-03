import express from "express";
import { userMiddleware } from "../middleware/auth-middleware.js";
import { bankBalance, transferMoney } from "../controllers/bank.controller.js";
const bankRouter = express.Router();
//bank....
bankRouter.get("/balance", userMiddleware, bankBalance);
bankRouter.post("/money-transfer", userMiddleware, transferMoney);
export default bankRouter;
//# sourceMappingURL=bank.routes.js.map