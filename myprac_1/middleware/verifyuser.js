import jwt from "jsonwebtoken";
import { User } from "../schemas/userSchema.js";

export const verifyUser = async (req, res, next) => {
  try {
    if (!req.headers.authrization) {
      return res.json({
        success: false,
        message: "Token not found",
      });
    }
    const getToken = req.headers.authrization.split(" ")[1];
    const verifyUser = await jwt.verify(getToken, process.env.SECRET);
    req.userId = verifyUser.id;
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const userId = req.userId;
    const userExist = await User.findById({ _id: userId });
    if (!userExist) {
      return res.json({
        success: false,
        message: "User not found",
      });
      next();
    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
