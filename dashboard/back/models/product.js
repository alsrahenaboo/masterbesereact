const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }, // References category model
    imageUrl: { type: String }, // Stores image URL for product
    stock: { type: Number, default: 0 }, // Quantity in stock
    isActive: { type: Boolean, default: true }, // Active or not
    specifications: { type: String }, // Additional product specifications
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
