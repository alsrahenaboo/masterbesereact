import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // جلب المراجعات عند تحميل المكون
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviews"); // فرضًا أن الـ API على هذا الرابط
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchReviews();
  }, []);

  // إضافة مراجعة جديدة
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/reviews/add", // تأكد من صحة الرابط
        { product, rating, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Review added successfully!");

      // إعادة جلب المراجعات بعد إضافة مراجعة جديدة
      const response = await axios.get("http://localhost:5000/api/reviews");
      setReviews(response.data);

      // إعادة تعيين الحقول
      setProduct("");
      setRating(1);
      setComment("");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred while adding review"
      );
    }
  };

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review._id}>
              <strong>{review.user.username}</strong> rated{" "}
              <strong>{review.product.name}</strong> {review.rating} stars
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}

      <h2>Add a Review</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product ID"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          min="1"
          max="5"
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <textarea
          placeholder="Your review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
