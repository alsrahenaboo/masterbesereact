// routes/reviewsRoutes.js
const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");
const authMiddleware = require("../middleware/authMiddleware");

// إضافة مراجعة جديدة (يجب أن يكون المستخدم مسجل الدخول)
router.post("/add", authMiddleware, reviewsController.addReview);

// جلب جميع المراجعات
router.get("/", reviewsController.getAllReviews);

// جلب المراجعات حسب المنتج
router.get("/product/:productId", reviewsController.getReviewsByProduct);

module.exports = router;
