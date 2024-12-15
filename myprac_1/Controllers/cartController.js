import { Cart } from "../schemas/cartSchema";
import { Product } from "../schemas/productSchema";

export const addCart = async (req, res) => {
  try {
    const userId = req.userId;
    if (!req.body.productId) {
      return res.json({
        success: false,
        message: "Product id is required",
      });
    }
    const isExistProduct = await Product.findById({ _id: req.body.productId });
    if (!isExistProduct) {
        return res.json({
            success: false,
            message: "Product not found",
        })
    }
    
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to add cart",
      error: error.message,
    });
  }
};
