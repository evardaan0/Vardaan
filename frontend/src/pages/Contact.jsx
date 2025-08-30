import React, { useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../App"; // Import backend URL from App.js

export default function Contact() {
  const API_URL = useContext(ApiContext); // Backend URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    purpose: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await axios.post(`${API_URL}/api/newContact`, formData);

      if (response.data) {
        setSuccess("✅ Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          city: "",
          purpose: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section, Address Section, Map Section remain the same */}
      {/* ... your existing HTML content ... */}

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Inputs remain the same */}
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="mobile"
              className="form-control"
              placeholder="Mobile *"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <select
            className="form-control"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          >
            <option value=""> Select Purpose </option>
            <option value="Build Road">Build Road</option>
            <option value="Build Home">Build Home</option>
            <option value="Build Bridges">Build Bridges</option>
            <option value="Build Hospital">Build Hospital</option>
          </select>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Message *"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark" disabled={loading}>
          {loading ? "Sending..." : "SEND"}
        </button>
      </form>
    </div>
  );
}
