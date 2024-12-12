import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../Controllers/productController.js";
import { verifyUser } from "../middleware/verifyuser.js";
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/all-products", verifyUser, getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
