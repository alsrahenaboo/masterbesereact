const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, // Category name (e.g., "Hardwood", "Vinyl")
    description: { type: String }, // Category description
    imageUrl: { type: String }, // Image representing the category
    isActive: { type: Boolean, default: true }, // Whether the category is active or not
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
