import { accountModel } from "../model/bank-account-model.js";
import mongoose from "mongoose";
// check the balance...
export const bankBalance = async (req, res) => {
    try {
        const account = await accountModel.findOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        });
        res.json({
            balance: account?.balance
        });
    }
    catch (error) {
        res.status(401).json({
            error: error,
            message: ("Something went to be wrong....!")
        });
    }
};
export const transferMoney = async (req, res) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const { amount, to } = req.body;
        const parsedAmount = Number(amount);
        if (!parsedAmount || parsedAmount <= 0) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid amount" });
        }
        if (!req.userId) {
            await session.abortTransaction();
            return res.status(401).json({ message: "Unauthorized" });
        }
        if (!mongoose.Types.ObjectId.isValid(to)) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid receiver id" });
        }
        if (req.userId === to) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Cannot transfer to yourself" });
        }
        const senderId = new mongoose.Types.ObjectId(req.userId);
        const receiverId = new mongoose.Types.ObjectId(to);
        const senderAccount = await accountModel.findOne({
            userId: senderId
        }).session(session);
        if (!senderAccount || senderAccount.balance < parsedAmount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }
        const receiverAccount = await accountModel.findOne({
            userId: receiverId
        }).session(session);
        if (!receiverAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Receiver account not found"
            });
        }
        await accountModel.updateOne({ userId: senderId }, { $inc: { balance: -parsedAmount } }).session(session);
        await accountModel.updateOne({ userId: receiverId }, { $inc: { balance: parsedAmount } }).session(session);
        await session.commitTransaction();
        return res.json({
            message: "Transfer successful"
        });
    }
    catch (error) {
        await session.abortTransaction();
        return res.status(500).json({
            message: "Transaction failed",
            error: error.message
        });
    }
    finally {
        session.endSession();
    }
};
//# sourceMappingURL=bank.controller.js.map