// controllers/reviewsController.js
const Review = require("../models/Review");
const Product = require("../models/Product");

// إضافة مراجعة جديدة
exports.addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    // التحقق من صحة الـ rating
    if (rating < 1 || rating > 5) {
      return res
        .status(400)
        .json({ message: "Rating must be between 1 and 5" });
    }

    // إنشاء مراجعة جديدة
    const review = new Review({
      user: req.user._id, // مستخدم مسجل الدخول
      product: productId,
      rating,
      comment,
    });

    // حفظ المراجعة في قاعدة البيانات
    await review.save();

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// استرجاع جميع المراجعات
exports.getAllReviews = async (req, res) => {
  try {
    // جلب المراجعات مع ربطها بالمستخدمين والمنتجات
    const reviews = await Review.find()
      .populate("user", "username") // ربط مع اسم المستخدم
      .populate("product", "name"); // ربط مع اسم المنتج

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// استرجاع مراجعة معينة حسب الـ product ID
exports.getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId })
      .populate("user", "username")
      .populate("product", "name");

    if (!reviews) {
      return res
        .status(404)
        .json({ message: "No reviews found for this product" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
