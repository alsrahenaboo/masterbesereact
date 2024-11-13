

// const express = require("express");
// const router = express.Router();
// const orderController = require("../controller/orderController"); // Adjust the path to your controller

// // Get all orders
// router.get("/orders", orderController.getAllOrders);

// // Update an order
// router.put("/orders/:id", orderController.updateOrder);

// // Soft delete an order
// router.delete("/orders/:id", orderController.softDeleteOrder);

// module.exports = router;




const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController"); // Adjust the path to your controller

// Get all orders
router.get("/orders", orderController.getAllOrders);

// Update an order
router.put("/orders/:id", orderController.updateOrder);

// Soft delete an order
router.delete("/orders/:id", orderController.softDeleteOrder);

module.exports = router;
