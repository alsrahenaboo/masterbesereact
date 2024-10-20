// // controllers/orderController.js

// const Order = require("../models/Order"); // Adjust the path to your Order model

// // Get all orders
// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate("user");
//     return res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return res.status(500).json({ message: "Internal server error." });
//   }
// };
// controllers/orderController.js

const Order = require("../models/Order"); // Adjust the path to your Order model

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user");
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status, paymentDetails, shippingDetails } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status, paymentDetails, shippingDetails },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete an order
exports.softDeleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }

    return res
      .status(200)
      .json({ message: "Order deleted successfully.", order: updatedOrder });
  } catch (error) {
    console.error("Error deleting order:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
