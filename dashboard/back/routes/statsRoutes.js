const express = require("express");
const router = express.Router();
const statsController = require("../controller/statsController");

router.get("/orders", statsController.getOrderStats);
router.get("/products", statsController.getProductStats);

module.exports = router;
