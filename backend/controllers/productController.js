
const Product = require("../models/Product");

// Fetch all products, filter by category if specified
exports.getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {}; // Filter by category if provided

    const products = await Product.find().populate("category");
    // Filter products based on the category name
    const filteredProducts = products.filter((item) => {
      console.log(item); // Log each item for debugging
      return item.category.name === category; // Return the result of the comparison
    });

    res.status(200).json(filteredProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
