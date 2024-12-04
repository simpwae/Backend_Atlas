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
    const id = req.params;
    const isExist = await product.findById({ _id: id });
    if(!isExist){
      return res.json({
        success:false,
        message:"Product not found",
      })
    }

    const { title, description, price } = req.body;
  await product.findByIdAndUpdate({
    _id: id},
    {
      $set: {
        title: title,
        description: description,
        price: price,
      },
    }
  )
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};
