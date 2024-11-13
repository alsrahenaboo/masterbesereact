



// const Review = require("../models/Review");

// const reviewController = {
//   // Get all reviews
//   getAllReviews: async (req, res) => {
//     try {
//       const reviews = await Review.find()
//         .populate("user", "name")
//         .sort({ createdAt: -1 });
//       res.json(reviews);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   // Create a new review
//   createReview: async (req, res) => {
//     try {
//       const { rating, comment } = req.body;

//       const review = new Review({
//         user: req.user._id,
//         rating,
//         comment,
//       });

//       const savedReview = await review.save();
//       await savedReview.populate("user", "name");

//       res.status(201).json(savedReview);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   },

//   // Update a review
//   updateReview: async (req, res) => {
//     try {
//       const { rating, comment } = req.body;

//       const review = await Review.findOne({
//         _id: req.params.id,
//         user: req.user._id,
//       });

//       if (!review) {
//         return res.status(404).json({ message: "Review not found" });
//       }

//       review.rating = rating || review.rating;
//       review.comment = comment || review.comment;

//       const updatedReview = await review.save();
//       await updatedReview.populate("user", "name");

//       res.json(updatedReview);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   },

//   // Delete a review
//   deleteReview: async (req, res) => {
//     try {
//       const review = await Review.findOne({
//         _id: req.params.id,
//         user: req.user._id,
//       });

//       if (!review) {
//         return res.status(404).json({ message: "Review not found" });
//       }

//       await review.remove();
//       res.json({ message: "Review deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },
// };

// module.exports = reviewController;



const Review = require("../models/Review"); // Adjust the path according to your project structure

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("user","username") // Assuming you want to show the user's name
      .sort({ createdAt: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching reviews", error: error.message });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    // Assuming you're using authentication middleware and have user info in req.user
    const userId = req.user._id;

    const newReview = new Review({
      user: userId,
      rating,
      comment,
    });

    const savedReview = await newReview.save();

    // Populate user information before sending response
    const populatedReview = await Review.findById(savedReview._id).populate(
      "user",
      "name"
    );

    res.status(201).json(populatedReview);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating review", error: error.message });
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);

    // Check if review exists
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if the user is the owner of the review
    if (review.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this review" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { rating, comment },
      { new: true }
    ).populate("user", "name");

    res.status(200).json(updatedReview);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating review", error: error.message });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if the user is the owner of the review
    if (review.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this review" });
    }

    await review.remove();
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error deleting review", error: error.message });
  }
};