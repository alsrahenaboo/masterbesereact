// const express = require("express");
// const router = express.Router();
// const profileController = require("../controllers/profileController");
// const authMiddleware = require("../middleware/authMiddleware");

// router.get("/profile", authMiddleware, profileController.getProfile);
// router.put("/profile", authMiddleware, profileController.updateProfile);
// router.delete("/profile", authMiddleware, profileController.deleteProfile);


// module.exports = router;




// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

// Routes for profile management
router.get("/profile", authMiddleware, profileController.getProfile);
router.put("/profile", authMiddleware, profileController.updateProfile);
router.delete("/profile", authMiddleware, profileController.deleteProfile);

// Routes for reviews management
router.get("/profile/reviews", authMiddleware, profileController.getUserReviews);
router.delete("/profile/reviews/:reviewId", authMiddleware, profileController.deleteReview);

module.exports = router;