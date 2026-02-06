import { userModel } from "../model/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signupSchema, signinSchema } from '../schema/users-validation.js';
import type { Request, Response } from "express";
import {accountModel} from "../model/bank-account-model.js"
import mongoose from "mongoose";

//signup controller
export const signupUser = async (req: Request, res: Response) => {

  
  try {
    const parsed = signupSchema.parse(req.body);

    // hashing  the  user-password for security par-pass
    const hashedPassword = await bcrypt.hash(parsed.password, 10);

    // push the user-information into the db ...
    const user = await userModel.create({
      firstName: parsed.firstName,
      lastName: parsed.lastName,
      email: parsed.email,
      password: hashedPassword

    });

    // balance are credit user account....................

    await accountModel.create({
  userId: user._id,
  balance: Math.floor(Math.random() * 10000) + 1
});




    res.status(201).json({
      message: "welcome to payTm successfully signup !... "
    })

  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    // Handle duplicate key error (MongoDB)

    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern || {})[0];
      if (field) {
        return res.status(409).json({
          message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists. Please use a different ${field}.`
        });
      }
      return res.status(409).json({
        message: "A user with this information already exists. Please use different credentials."
      });
    }
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong during signup.", error: error.message });

  }

}
//signin controller
export const signinUser = async (req: Request, res: Response) => {
  try {

    const parsed = signinSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        errors: parsed.error
      });
    }


    const { email, password, } = parsed.data;

    if (!email || !password  ) {
      return res.status(404).json({
        message: "email and password are required !"
      })

    }

    const user = await userModel.findOne({
      email
    })

    //     const userid = user?._id;

    //  //...................... create a random balance this user.............
    //  if(userid){
    //       const BalanceCredit =  await accountModel.create({
    //           userId : userid,
    //           balance : 1 + Math.random() * 10000
              
    //       })
    //       console.log(BalanceCredit);
    //  }   



    if (!user) {
      return res.status(404).json({
        message: "Does not find any users...!"
      })
    }

    if (!user.password) {
      return res.status(500).json({
        message: "User has no password set"
      })
    }

    const password_match = await bcrypt.compare(password, user.password);

    if (password_match) {
      if (!process.env.JWT_PASSWORD) {
        console.error("JWT_PASSWORD environment variable is not set");
        return res.status(500).json({
          message: "Server configuration error. Please contact support."
        });
      }

      // bcrypt the token...
      const token = jwt.sign({
        id: user._id.toString(),
        firstName: user.firstName
      }, process.env.JWT_PASSWORD as string)

      res.json({
        token
      })
    }
    else {

      return res.status(403).json({
        message: "invalid login details !!"
      })

    }
     
  } catch (error: any) {

    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong during signup.", error: error.message });

  }
}
// update controller
export const updateDetailsUser = async (req: Request, res: Response) => {

  try {
    const userId = req.userId;

    const { firstName, lastName, password } = req.body;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized"
      })
    }
    const updateData: UpdateUserData = {};

    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;

    if (password) {
      if (password.length < 6) {
        return res.status(400).json({
          message: "Password must be at least 6 characters"
        })
      }

      // hashing the password 
      const hashPassword = await bcrypt.hash(password, 10);
      updateData.password = hashPassword;

    }

    // now update the data into  the database
    const updatedUserData = await userModel.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, select: "-password" } // never return the password so i use this algo

    );

    if (!updatedUserData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUserData,
    });
  } catch (error: any) {
    console.error("Update user error:", error);
    res.status(500).json({ message: "Server error" });
  }

}

//controller  filterable via firstName/lastName
export const filterUsersData = async (req: Request, res: Response) => {
  try {
    const filter =
      typeof req.query.filter === "string" ? req.query.filter : "";

    const users = await userModel.find({
      $or: [
        { firstName:
           { $regex: filter, 
            $options: "i" }
           },
        { lastName: 
          { $regex: filter, 
            $options: "i" }
           },
      ],
    });

    res.status(200).json({ user:users.map(user =>({
        _id: user._id,
        firstName : user.firstName,
        lastName : user.lastName
    }))
   });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        message: "Invalid user id"
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid ObjectId format"
      });
    }

    const user = await userModel.findById(id).select("firstName lastName");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({ user });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};




