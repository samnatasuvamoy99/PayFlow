import mongoose, { Schema, model } from "mongoose";
import { userModel } from "../model/user-model.js";
import { required } from "zod/mini";


const accountSchema = new mongoose.Schema({
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'users',
       required:true
    },
    balance:{
       type:Number,
       required:true,
        default: 0,
    }
    
   
},
{ timestamps: true }
);

export const accountModel = model("account" , accountSchema) 

