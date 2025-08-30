require("dotenv").config();
const express = require("express");
const Review = require("../models/ReviewModel");  // import Mongoose model
const nodemailer = require("nodemailer");
const router = express.Router();

// configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // convert string to boolean
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


// ✅ Add review
router.post("/newReview", async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    // 1️⃣ Save review to DB
    const newReview = new Review({
      name,
      rating,
      comment,
    });
    await newReview.save();

    // 2️⃣ Send email
    await transporter.sendMail({
      from: `"My Website" <evardaan0@gmail.com>`,
      to: "info@vardaanenterprise.in",
      subject: "🌟 New Review Submitted",
      html: `
        <h2>New Review Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Rating:</b> ${rating}</p>
        <p><b>Review:</b> ${comment}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Review saved !" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ Get all reviews
router.get("/allReviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
