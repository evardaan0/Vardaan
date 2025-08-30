require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const Contact = require("../models/ContactModel"); // import your Contact model
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


// ✅ Contact form route
router.post("/newContact", async (req, res) => {
  try {
    const { name, email, mobile, city, purpose, message } = req.body;

    // 1️⃣ Save contact form to DB
    const newContact = new Contact({
      name,
      email,
      mobile,
      city,
      purpose,
      message,
    });
    await newContact.save();

    // 2️⃣ Send email
    await transporter.sendMail({
      from: `"My Website" <evardaan0@gmail.com>`, 
      to: "info@vardaanenterprise.in",
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${mobile}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Purpose:</b> ${purpose}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Form submitted & email sent!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
