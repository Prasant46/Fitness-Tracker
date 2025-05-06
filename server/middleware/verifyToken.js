import jwt from "jsonwebtoken";
import { createError } from "../error.js";

const JWT_SECRET = process.env.JWT || "fitnesstrack-secret-key";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(createError(401, "You are not authenticated!"));
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return next(createError(401, "Invalid token format!"));
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};
