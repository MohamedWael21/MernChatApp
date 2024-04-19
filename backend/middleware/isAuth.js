import AppError from "../utils/appError.js";
import jwt from "jsonwebtoken";

export default function isAuth(req, res, next) {
  const { token } = req.cookies;

  if (!token) throw new AppError("No token provided", 401);

  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = userId;

  next();
}
