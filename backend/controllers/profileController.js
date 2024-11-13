// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

// exports.getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching profile" });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const { username, email, currentPassword, newPassword } = req.body;
//     const user = await User.findById(req.user._id);

//     // Create update object
//     const updates = {};
//     if (username) updates.username = username;
//     if (email) updates.email = email;

//     // If user wants to update password
//     if (currentPassword && newPassword) {
//       // Verify current password
//       const isMatch = await bcrypt.compare(currentPassword, user.password);
//       if (!isMatch) {
//         return res
//           .status(400)
//           .json({ message: "Current password is incorrect" });
//       }
//       updates.password = await bcrypt.hash(newPassword, 8);
//     }

//     // Check if username or email already exists
//     if (username || email) {
//       const existingUser = await User.findOne({
//         $and: [
//           { _id: { $ne: req.user._id } },
//           {
//             $or: [{ username: username || "" }, { email: email || "" }],
//           },
//         ],
//       });

//       if (existingUser) {
//         return res.status(400).json({
//           message: "Username or email already exists",
//         });
//       }
//     }

//     // Update user
//     const updatedUser = await User.findByIdAndUpdate(
//       req.user._id,
//       { $set: updates },
//       { new: true }
//     ).select("-password");

//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating profile" });
//   }
// };

// exports.deleteProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     user.isDeleted = true;
//     user.isActive = false;
//     await user.save();
//     res.json({ message: "Profile deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting profile" });
//   }
// };

// controllers/profileController.js
const User = require("../models/User");
const Review = require("../models/Review");
const bcrypt = require("bcryptjs");

exports.getProfile = async (req, res) => {
  try {
    // جلب بيانات المستخدم بدون كلمة المرور
    const user = await User.findById(req.user._id)
      .select("-password")
      .lean();

    // جلب المراجعات الخاصة بالمستخدم
    const reviews = await Review.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    // دمج بيانات المستخدم مع المراجعات
    res.json({
      ...user,
      reviews
    });
  } catch (error) {
    console.error('Error in getProfile:', error);
    res.status(500).json({ message: "Error fetching profile" });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, email, currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);

    // Create update object
    const updates = {};
    if (username) updates.username = username;
    if (email) updates.email = email;

    // If user wants to update password
    if (currentPassword && newPassword) {
      // Verify current password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Current password is incorrect" });
      }
      updates.password = await bcrypt.hash(newPassword, 8);
    }

    // Check if username or email already exists
    if (username || email) {
      const existingUser = await User.findOne({
        $and: [
          { _id: { $ne: req.user._id } },
          {
            $or: [
              { username: username || "" },
              { email: email || "" }
            ],
          },
        ],
      });

      if (existingUser) {
        return res.status(400).json({
          message: "Username or email already exists",
        });
      }
    }

    // Update user
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updates },
      { new: true }
    ).select("-password");

    // جلب المراجعات بعد التحديث
    const reviews = await Review.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      ...updatedUser.toObject(),
      reviews
    });
  } catch (error) {
    console.error('Error in updateProfile:', error);
    res.status(500).json({ message: "Error updating profile" });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.isDeleted = true;
    user.isActive = false;
    await user.save();

    // حذف أو إخفاء المراجعات المرتبطة بالمستخدم
    await Review.updateMany(
      { user: req.user._id },
      { isDeleted: true }
    );

    res.json({ message: "Profile and associated reviews deleted successfully" });
  } catch (error) {
    console.error('Error in deleteProfile:', error);
    res.status(500).json({ message: "Error deleting profile" });
  }
};

// وظائف إضافية للتعامل مع المراجعات
exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.json(reviews);
  } catch (error) {
    console.error('Error in getUserReviews:', error);
    res.status(500).json({ message: "Error fetching user reviews" });
  }
};










exports.deleteReview = async (req, res) => {
  const { reviewId } = req.params;
  try {
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Ensure the review belongs to the user before deleting
    if (review.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await review.remove();
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};