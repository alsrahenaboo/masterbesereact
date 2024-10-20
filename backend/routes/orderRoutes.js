// const express = require("express");
// const router = express.Router();
// const orderController = require("../controllers/orderController");
// const authMiddleware = require("../middleware/authMiddleware");

// router.post("/create", authMiddleware, orderController.createOrder);
// router.get("/user/:userId", authMiddleware, orderController.getOrders);
// router.get("/:orderId", authMiddleware, orderController.getOrderById);
// router.patch(
//   "/:orderId/status",
//   authMiddleware,
//   orderController.updateOrderStatus
// );

// // module.exports = router;
// const express = require("express");
// const router = express.Router();
// const orderController = require("../controllers/orderController");
// const authMiddleware = require("../Middleware/authMiddleware");

// router.post("/create", authMiddleware, orderController.createOrder);
// router.get("/user/:userId", authMiddleware, orderController.getOrders);
// router.get("/:orderId", authMiddleware, orderController.getOrderById);
// router.patch(
//   "/:orderId/status",
//   authMiddleware,
//   orderController.updateOrderStatus
// );

// module.exports = router;





const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../Middleware/authMiddleware");

router.post("/create", authMiddleware, orderController.createOrder);
router.post("/payment/process", authMiddleware, orderController.processPayment);
router.get("/user/:userId", authMiddleware, orderController.getOrders);
router.get("/:orderId", authMiddleware, orderController.getOrderById);
router.patch(
  "/:orderId/status",
  authMiddleware,
  orderController.updateOrderStatus
);

module.exports = router;