// const Product = require("../models/Product");

// // Fetch all products or filter by category
// exports.getProducts = async (req, res) => {
//   try {
//     const { category } = req.query;
//     const filter = category ? { category } : {};

//     // Populate category to get the actual category details
//     const products = await Product.find(filter).populate("category");

//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Fetch single product by ID
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id).populate("category");
//     if (!product) return res.status(404).json({ message: "Product not found" });

//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const Product = require("../models/Product");

// Fetch all products, filter by category if specified
exports.getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {}; // Filter by category if provided
    console.log("category");
    const products = await Product.find().populate("category");
    products.filter((items) => {
      items.category.name === filter;
    });
    res.status(200).json(products);
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
