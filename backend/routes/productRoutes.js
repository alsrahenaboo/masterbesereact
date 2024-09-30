const express = require("express");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

const router = express.Router();

// Route to get all products (with optional category filtering)
router.get("/products", getProducts);

// Route to get a product by ID
router.get("/products/:id", getProductById);

module.exports = router;
