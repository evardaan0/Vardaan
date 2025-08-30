// test-server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const ContactRoute = require("./routes/ContactRoute");
const ReviewRoute = require("./routes/ReviewRoute");
const CareerRoute = require("./routes/ApplicationRoute");
const nodemailer = require("nodemailer");


const app = express();
const PORT = 5000;

const url = process.env.MONGO_URL;

app.use(
  cors({
    origin: ["https://vardaanenterprise.in"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/uploads/resumes", express.static("uploads/resumes"));


app.get("/", (req, res) => {
  res.send("✅ Bare Express server is running");
});


app.use("/api", ContactRoute);
app.use("/api", ReviewRoute);
app.use("/api",CareerRoute);



app.listen(PORT, () => {
  console.log(`🚀 Test server listening on http://localhost:${PORT}`);
});
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
