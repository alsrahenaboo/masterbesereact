// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
//     products: [],
//     totalAmount: { type: Number, required: true }, // Total price for the order
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        }, // Reference to the product
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true }, // Total price for the order
    shippingDetails: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentDetails: {
      method: { type: String, required: true }, // Payment method (e.g., Credit Card, PayPal)
      status: { type: String, required: true }, // Payment status (e.g., Paid, Pending)
    },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    }, // Order status
    isDeleted: { type: Boolean, default: false }, // Soft delete field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
