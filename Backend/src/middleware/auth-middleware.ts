import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log("middleware called.....",token);

    if (!token) {
      return res.status(401).json({
        message: "Invalid token format",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_PASSWORD as string
    ) as jwt.JwtPayload;

    if (!decoded || !decoded.id) {
      return res.status(403).json({ message: "Invalid token" });
    }

    if (decoded) {
      req.userId = decoded.id; // make sure type is extended
      next();
    }



  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(403).json({ message: "You are not logged in" });
  }
};


