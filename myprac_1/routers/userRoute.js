import express from "express";

import {
  addUserController,
  deleteUser,
  updateUser,
} from "../Controllers/userController.js";
const router = express.Router();

router.post("/addUser", addUserController);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);
export default router;
