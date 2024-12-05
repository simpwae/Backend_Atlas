import { product } from "../schemas/productSchema.js";

export const addProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const newPro = await product.create({
      title: title,
      description: description,
      price: price,
    });
    res.json({
      success: true,
      message: "Product added successfully",
      product: newPro,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await product.find();
    res.json({
      success: true,
      message: "All products",
      data: allProducts,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to get products",
      error: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const isExist = await product.findById({ _id: id });
    if (!isExist) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }
    await product.findByIdAndUpdate(
      {
        _id: id,
      },
      req.body
    );
    res.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const isExist = await product.findById({ _id: id });
    if (!isExist) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }
    const deleteProduct = await product.deleteOne({ _id: id });
    res.json({
      success: true,
      message: "Product deleted successfully",
      data: deleteProduct,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
  }
};
