import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routers/userRoute.js";
import { User } from "./schemas/userSchema.js";
import dotenv from "dotenv";
import productRoute from "./routers/productRoute.js";
const app = express();
dotenv.config();
const bdConnect = async () => {
  try {
    const con = await mongoose.connect(process.env.NODE_MONGO_URL);
    console.log(con.connection.host);
  } catch (error) {
    throw error;
  }
};
bdConnect();

app.use(express.json());
app.use("/", userRoutes);
app.use("/product", productRoute);

app.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add user",
      error: error.message,
    });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findOne({
      _id: id,
    });

    if (!findUser) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "user fetched successfully",
      data: findUser,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to get user", // Corrected error message
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
