import express from "express";
import {
  addProduct,
  getAllProducts,
  updateProduct,
} from "../Controllers/productController.js";
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/all-products", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
export default router;
