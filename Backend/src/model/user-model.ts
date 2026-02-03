import { Schema, model } from "mongoose";


const userSchema = new Schema({
  firstName: {
    type: String, unique: true
  },
  lastName: {
    type: String, unique: true
  },
  // username: {
  //   type: String, unique: true
  // },
  email: {
    type: String, unique: true
  },
  password: String
},
  { timestamps: true }
)

export const userModel = model("users", userSchema);