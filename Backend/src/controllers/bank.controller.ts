import { accountModel } from "../model/bank-account-model.js";
import type { Request, Response } from "express";
import mongoose from "mongoose";


// check the balance...
export const bankBalance = async(req:Request , res:Response) =>{

 try {
  const account = await accountModel.findOne({
         userId: new mongoose.Types.ObjectId(req.userId)
     });
 
     res.json({
         balance: account?.balance
     })
 } catch (error : any) {
     res.status(401).json({
       error:error,
       message:("Something went to be wrong....!")
     })
 }
}

//transfer the money someone...
 export const transferMoney  = async ( req : Request , res: Response) =>{
   // start the session  for transaction for transfer the money....
try {
  
     const session = await mongoose.startSession();
  
     session.startTransaction();
     const { amount , to} = req.body;
  
     // fetch  the account for the transaction...
     const  account =  await accountModel.findOne({
        userId :new mongoose.Types.ObjectId(req.userId)
       
     }).session(session);
  
     if( !account || account.balance < amount){
       await session.abortTransaction();
       return res.status(400).json({
         message:"Insufficient balance please add some money for tranc.."
       })
     }
     const toAccount = await accountModel.findOne({ userId: to }).session(session);
  
      if (!toAccount) {
          await session.abortTransaction();
          return res.status(400).json({
              message: "Invalid account"
          });
      }
  
      // Perform the transfer
      await accountModel.updateOne({ userId:new mongoose.Types.ObjectId(req.userId) }, 
      { $inc: { balance: -amount } }).session(session);
  
      await accountModel.updateOne({ userId: to }, 
        { $inc: { balance: amount } }).session(session);
  
      // Commit the transaction
      await session.commitTransaction();
  
      res.json({
          message: "Transfer successful"
      });
     
} catch (error : any) {
   return res.status(500).json({
    error: error.message || error,
    message: "Transaction not completed ... !!!"
});

 }
}