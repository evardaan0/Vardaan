import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
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
      const response = await axios.post(
        "https://vardaan-d6l4.onrender.com/api/newContact",
        formData
      );

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
      {/* Hero / Banner Section */}
      <section
        className="hero-section text-white d-flex align-items-center position-relative"
        style={{
          backgroundImage: "url('/assets/img/contactbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "310px",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        ></div>

        <div className="container text-center position-relative">
          <h1
            className="fw-bold"
            style={{
              color: "#ffc107",
              fontSize: "3rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Contact Us
          </h1>
          <p className="text-light">Home » Contact</p>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            {/* Head Office */}
            <div className="col-md-6 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="fw-bold text-warning mb-3">
                    <i className="bi bi-building me-2"></i> HEAD OFFICE
                  </h5>
                  <p className="text-muted">
                    <strong>Floor:</strong> PLOT NO 25 <br />
                    <strong>Building:</strong> Scheme No 54 <br />
                    <strong>Premises:</strong> PU-4 <br />
                    <strong>Street:</strong> AB Road <br />
                    <strong>Landmark:</strong> Behind C-21 MALL <br />
                    <strong>District:</strong> Indore <br />
                    <strong>State:</strong> Madhya Pradesh <br />
                    <strong>PIN Code:</strong> 452001
                  </p>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="col-md-6 mb-4">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="fw-bold text-warning mb-3">
                    <i className="bi bi-geo-alt me-2"></i> REGISTERED OFFICE
                  </h5>
                  <p className="mb-2 text-dark">
                    <i className="bi bi-telephone text-warning me-2"></i>
                    <strong>+91 8889710105</strong>
                  </p>
                  <p className="mb-0 text-dark">
                    <i className="bi bi-envelope text-warning me-2"></i>
                    <strong>info@vardaanenterprise.in</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch + Map */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-4">
                GET <span className="text-warning">IN TOUCH</span>
              </h3>

              {success && <div className="alert alert-success">{success}</div>}
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
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

                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="col-md-6">
              <h3 className="fw-bold mb-4">
                GET <span className="text-warning">LOCATION</span>
              </h3>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.0532723280464!2d75.87562147468264!3d22.690861479412066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd9c59e76b11%3A0x3fd7f4e3dd16f6f!2sC21%20Mall%2C%20PU4%2C%20Scheme%2054%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1693311122334"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
