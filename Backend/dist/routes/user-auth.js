import { userModel } from "../model/user-schema.js";
import express from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";
export const userRoute = express.Router();
const signupSchema = z.object({
    firstName: z.string().min(3, " user-firstName must be 3 char.."),
    lastName: z.string().min(3, "user-lastName must be 3 char..."),
    userName: z.string().min(5, "user-userName at least 3 char"),
    email: z.string().email("InaValid email address"),
    password: z.string().min(6, "user-password must be 6 char...")
});
const signinSchema = z.object({
    userName: z.string().min(5, "user-userName must be 5 char.."),
    email: z.string().email(),
    password: z.string().min(6, "user-password must be 6 char...")
});
// signup-end-point for user....
userRoute.post("/signup", async (req, res) => {
    try {
        const parsed = signupSchema.parse(req.body);
        // hashing  the  user-password for security par-pass
        const hashedPassword = await bcrypt.hash(parsed.password, 10);
        // push the user-information into the db ...
        await userModel.create({
            firstName: parsed.firstName,
            lastName: parsed.lastName,
            username: parsed.userName,
            email: parsed.email,
            password: hashedPassword
        });
        res.status(201).json({
            message: "welcome to payTm successfully signup !... "
        });
    }
    catch (error) {
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
});
// signin-end-point for user...
userRoute.post("/signin", async (req, res) => {
    const parsed = signinSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            errors: parsed.error
        });
    }
    const { email, password, userName } = parsed.data;
    if (!email || !password || !userName) {
        return res.status(404).json({
            message: "email and password are required !"
        });
    }
    const user = await userModel.findOne({
        email
    });
    if (!user) {
        return res.status(404).json({
            message: "Does not find any users...!"
        });
    }
    if (!user.password) {
        return res.status(500).json({
            message: "User has no password set"
        });
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
            id: user._id.toString()
        }, process.env.JWT_PASSWORD);
        res.json({
            token
        });
    }
    else {
        return res.status(403).json({
            message: "invalid login details !!"
        });
    }
});
//# sourceMappingURL=user-auth.js.map