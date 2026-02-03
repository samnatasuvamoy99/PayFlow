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
//transfer the money someone...
export const transferMoney = async (req, res) => {
    // start the session  for transaction for transfer the money....
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        const { amount, to } = req.body;
        // fetch  the account for the transaction...
        const account = await accountModel.findOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance please add some money for tranc.."
            });
        }
        const toAccount = await accountModel.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }
        // Perform the transfer
        await accountModel.updateOne({ userId: new mongoose.Types.ObjectId(req.userId) }, { $inc: { balance: -amount } }).session(session);
        await accountModel.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    }
    catch (error) {
        return res.status(500).json({
            error: error.message || error,
            message: "Transaction not completed ... !!!"
        });
    }
};
//# sourceMappingURL=bank.controller.js.map