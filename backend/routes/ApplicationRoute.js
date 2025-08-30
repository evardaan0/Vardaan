require("dotenv").config();
const express = require("express");
const Career = require("../models/ApplicationModel"); // import Mongoose model
const nodemailer = require("nodemailer");
const multer = require("multer");
const router = express.Router();

// Multer memory storage for buffer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // convert string to boolean
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


router.post("/apply", upload.single("resumeFile"), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      dob,
      permanentAddress,
      qualification,
      jobRole,
      totalExperience,
      currentSalary,
      expectedSalary,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, error: "Resume file is required" });
    }

    // Save application to DB
    const newApplication = new Career({
      fullName,
      email,
      phone,
      dob,
      permanentAddress,
      qualification,
      jobRole,
      totalExperience: Number(totalExperience),
      currentSalary: Number(currentSalary),
      expectedSalary: Number(expectedSalary),
      resumeFile: req.file.buffer, // store resume as buffer
    });

    await newApplication.save();

    // Send email with attachment
    await transporter.sendMail({
      from: `"My Website" <evardaan0@gmail.com>`,
      to: "info@vardaanenterprise.in",
      subject: `💼 New Job Application: ${jobRole || "N/A"}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>DOB:</b> ${dob}</p>
        <p><b>Address:</b> ${permanentAddress}</p>
        <p><b>Qualification:</b> ${qualification}</p>
        <p><b>Job Role:</b> ${jobRole}</p>
        <p><b>Experience:</b> ${totalExperience}</p>
        <p><b>Current Salary:</b> ${currentSalary}</p>
        <p><b>Expected Salary:</b> ${expectedSalary}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer, // attach buffer
        },
      ],
    });

    res.status(200).json({ success: true, message: "Application submitted & email sent!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
