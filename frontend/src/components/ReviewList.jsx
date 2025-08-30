import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/allReviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ⭐ Utility to render stars
  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  // 📅 Utility to format date & time
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    return new Date(dateString).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="review-list">
      <h3 className="text-center fw-bold mb-4" style={{ color: "#FFC107" }}>
        What Our Customers Say
      </h3>

      {reviews.length === 0 ? (
        <p className="text-center text-muted">No reviews yet. Be the first!</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="review-card">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold text-dark">{review.name}</h5>
              <small className="text-muted">
                {formatDate(review.createdAt)}
              </small>
            </div>

            <p className="rating">{renderStars(review.rating)}</p>
            <p className="comment">{review.comment}</p>
          </div>
        ))
      )}

      {/* Custom CSS */}
      <style>{`
        .review-card {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .review-card .rating {
          color: #ffc107;
          font-size: 18px;
          margin: 6px 0;
        }
        .review-card .comment {
          color: #333;
          font-size: 15px;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
