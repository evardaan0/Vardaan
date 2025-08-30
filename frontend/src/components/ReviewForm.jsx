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
      {/* Form fields */}
      <button type="submit" className="btn btn-warning w-100 fw-bold">
        Submit Review
      </button>
    </form>
  );
}
