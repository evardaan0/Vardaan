import React, { useState } from "react";
import axios from "axios";

export default function ReviewForm({ onReviewAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/newReview`,
        formData
      );
      onReviewAdded(res.data);
      setFormData({ name: "", rating: 5, comment: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to submit review");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="mb-3">
        <label className="form-label fw-bold">Your Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Rating</label>
        <select
          name="rating"
          className="form-select"
          value={formData.rating}
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              ⭐ {num}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Your Review</label>
        <textarea
          name="comment"
          className="form-control"
          rows="3"
          placeholder="Write your review..."
          value={formData.comment}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-warning w-100 fw-bold">
        Submit Review
      </button>

      <style>{`
        .review-form {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }
        .review-form input,
        .review-form textarea,
        .review-form select {
          border-radius: 8px;
          border: 1px solid #ddd;
          transition: 0.3s;
        }
        .review-form input:focus,
        .review-form textarea:focus,
        .review-form select:focus {
          border-color: #ffc107;
          box-shadow: 0 0 8px rgba(255,193,7,0.4);
        }
        .review-form button {
          border-radius: 8px;
          transition: 0.3s;
        }
        .review-form button:hover {
          transform: scale(1.05);
        }
      `}</style>
    </form>
  );
}
