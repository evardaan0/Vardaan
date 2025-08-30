import React, { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

export default function Reviews() {
  const [refresh, setRefresh] = useState(false);

  const handleReviewAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container py-5 reviews-page">
      <h2 className="fw-bold text-center mb-4 section-title">
        Customer Reviews
      </h2>

      {/* Review Form */}
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card shadow-sm p-4 mb-4 review-card">
            <ReviewForm onReviewAdded={handleReviewAdded} />
          </div>
        </div>
      </div>

      {/* Review List */}
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <ReviewList key={refresh} />
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .reviews-page {
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
          border-radius: 12px;
          padding: 40px 20px;
          box-shadow: inset 0 0 30px rgba(0,0,0,0.05);
        }

        .section-title {
          color: #FFC107;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background: #FFC107;
          margin: 12px auto 0;
          border-radius: 2px;
        }

        .review-card {
          border: none;
          border-radius: 16px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        /* Review Form Styling */
        .review-card form input,
        .review-card form textarea,
        .review-card form select {
          border-radius: 8px;
          border: 1px solid #ddd;
          transition: 0.3s;
        }

        .review-card form input:focus,
        .review-card form textarea:focus,
        .review-card form select:focus {
          border-color: #FFC107;
          box-shadow: 0 0 8px rgba(255,193,7,0.4);
        }

        .review-card button {
          background: #FFC107;
          border: none;
          color: #000;
          font-weight: 600;
          border-radius: 8px;
          padding: 10px 18px;
          transition: 0.3s;
        }

        .review-card button:hover {
          background: #e0a800;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
