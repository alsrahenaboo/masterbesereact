




import { useState, useEffect } from "react";
import axios from "axios";
import { Star } from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);
  const [editingReview, setEditingReview] = useState(null);
  const [editRating, setEditRating] = useState(0);
  const [editComment, setEditComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Configuration for authenticated requests
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/reviews");
      setReviews(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/reviews",
        {
          rating,
          comment,
        },
        config
      );

      if (response.status === 201) {
        setRating(0);
        setComment("");
        fetchReviews();
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert(error.response?.data?.message || "Error submitting review");
    }
  };

  // Start editing a review
  const startEditing = (review) => {
    setEditingReview(review._id);
    setEditRating(review.rating);
    setEditComment(review.comment);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingReview(null);
    setEditRating(0);
    setEditComment("");
  };

  // Save edited review
  const saveEdit = async (reviewId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/reviews/${reviewId}`,
        {
          rating: editRating,
          comment: editComment,
        },
        config
      );

      if (response.status === 200) {
        fetchReviews();
        cancelEditing();
      }
    } catch (error) {
      console.error("Error updating review:", error);
      alert(error.response?.data?.message || "Error updating review");
    }
  };

  // Delete review
  const handleDeleteReview = async (reviewId) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/reviews/${reviewId}`,
          config
        );
        if (response.status === 200) {
          fetchReviews();
        }
      } catch (error) {
        console.error("Error deleting review:", error);
        alert(error.response?.data?.message || "Error deleting review");
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Write Review Form */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                className="cursor-pointer"
                fill={star <= (hoveredStar || rating) ? "gold" : "none"}
                color={star <= (hoveredStar || rating) ? "gold" : "gray"}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about the website..."
            className="min-h-24 border rounded p-2 w-full"
          />
          <button
            type="submit"
            disabled={!rating}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          reviews.map((review) => (
            <div
              key={review._id}
              className="w-full border rounded p-4 mb-4 shadow-sm"
            >
              {editingReview === review._id ? (
                // Edit Form
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        className="cursor-pointer"
                        fill={star <= editRating ? "gold" : "none"}
                        color={star <= editRating ? "gold" : "gray"}
                        onClick={() => setEditRating(star)}
                      />
                    ))}
                  </div>
                  <textarea
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                    className="min-h-24 border rounded p-2 w-full"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={() => saveEdit(review._id)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={cancelEditing}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // Review Display
                <>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">
                        {review.user?.username || "Anonymous"}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            fill={index < review.rating ? "gold" : "none"}
                            color={index < review.rating ? "gold" : "gray"}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>

                  {/* Show edit/delete buttons only for the review owner */}
                  {review.user?._id === localStorage.getItem("userId") && (
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => startEditing(review)}
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteReview(review._id)}
                        className="text-red-500 hover:text-red-700 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination or Load More button could be added here */}
      {reviews.length > 0 && (
        <div className="mt-4 text-center">
          <button
            onClick={fetchReviews}
            className="text-blue-500 hover:text-blue-700"
          >
            Refresh Reviews
          </button>
        </div>
      )}

      {/* Error Message Display */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;