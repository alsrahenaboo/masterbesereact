


// const express = require("express");
// const router = express.Router();
// const reviewController = require("../controllers/reviewsController");
// const authMiddleware = require("../middleware/authMiddleware");

// // Get all reviews
// router.get("/", reviewController.getAllReviews);

// // Create a new review (protected route)
// router.post("/", authMiddleware, reviewController.createReview);

// // Update a review (protected route)
// router.put("/:id", authMiddleware, reviewController.updateReview);

// // Delete a review (protected route)
// router.delete("/:id", authMiddleware, reviewController.deleteReview);

// module.exports = router;

const express = require("express");
const router = express.Router();
const  authMiddleware  = require("../Middleware/authMiddleware"); // Assuming you have authentication middleware
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewsController");

// Public routes
router.get("/", getAllReviews);

// Protected routes (require authentication)
router.post("/",authMiddleware, createReview);
router.put("/:id",authMiddleware,  updateReview);
router.delete("/:id",authMiddleware,  deleteReview);

module.exports = router;