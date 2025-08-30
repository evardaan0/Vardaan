import React, { useState } from "react";
import axios from "axios";

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    permanentAddress: "",
    qualification: "",
    jobRole: "",
    totalExperience: "",
    currentSalary: "",
    expectedSalary: "",
    resumeFile: null,
  });

  // For text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // For file input (resume upload)
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resumeFile: e.target.files[0],
    }));
  };

  const jobs = [
    { id: 1, title: "Project Manager", eligibility: "BE Civil – 5+ Years experience in roads/buildings" },
    { id: 2, title: "Civil Engineer", eligibility: "BE Civil – 3+ Years experience in infrastructure projects" },
    { id: 3, title: "Site Supervisor", eligibility: "Diploma Civil – 3+ Years site handling experience" },
    { id: 4, title: "Architect Designer", eligibility: "B.Arch – 2+ Years experience in modern design" },
    { id: 5, title: "Quantity Surveyor", eligibility: "BE Civil – 5+ Years in billing/estimation, AutoCAD skills" },
    { id: 6, title: "Lab Technician", eligibility: "Diploma Civil – 3+ Years in quality testing" },
  ];


// Form submit
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("fullName", formData.fullName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("dob", formData.dob);
  data.append("permanentAddress", formData.permanentAddress);             // ✅ correct key
  data.append("qualification", formData.qualification);
  data.append("jobRole", selectedJob?.title || "");     // ✅ correct key
  data.append("totalExperience", formData.totalExperience);
  data.append("currentSalary", formData.currentSalary);
  data.append("expectedSalary", formData.expectedSalary);

  // ✅ correct multer field
  data.append("resumeFile", formData.resumeFile);

  try {
    const res = await axios.post("https://vardaan-d6l4.onrender.com/api/apply", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("✅ Application submitted successfully!");
    console.log("Saved Application:", res.data);
    setSelectedJob(null);
  } catch (err) {
    console.error("❌ Error submitting application:", err.response?.data || err.message);
    alert("❌ Error submitting application");
  }
};


  return (
    <div>
      {/* 🔹 Hero Banner */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-center text-white position-relative"
        style={{
          backgroundImage: "url('/assets/img/careerbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "320px",
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="position-relative">
          <h1 className="fw-bold display-4 text-warning">CAREER</h1>
          <p className="text-white">Home » Career</p>
        </div>
      </section>

      {/* 🔹 About Company */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold text-warning mb-4">🚀 Careers at Vardaan Enterprises</h2>
        <p className="lead px-lg-5" style={{ lineHeight: "1.8" }}>
          At <span className="fw-bold text-dark">Vardaan Enterprises</span>, we are redefining the future of
          construction in India. Our projects span across{" "}
          <strong>roads, bridges, commercial hubs, and housing</strong>.
          <br />
          <br />
          🌟 Here, you won’t just build structures — you’ll build a career filled with{" "}
          <span className="text-primary fw-bold">learning, growth, innovation, and recognition</span>.
          <br />
          We value <em>ideas, dedication, and teamwork</em>, and we believe in creating opportunities where every
          individual can shine.
        </p>

        {/* Highlights */}
        <div className="row mt-4 g-4">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-light h-100">
              <h5 className="fw-bold text-warning">🌱 Learn & Grow</h5>
              <p className="mb-0">Regular training, workshops, and mentorship to help you grow faster.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-light h-100">
              <h5 className="fw-bold text-warning">🤝 Collaborative Culture</h5>
              <p className="mb-0">Work with passionate teams who believe in building success together.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm bg-light h-100">
              <h5 className="fw-bold text-warning">🏆 Recognition</h5>
              <p className="mb-0">We reward dedication and celebrate every milestone with our people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Job Openings Table */}
      <section className="container py-5">
        <h2 className="fw-bold text-center text-warning mb-5">Current Job Openings</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark text-warning text-center">
              <tr>
                <th>Sr.No</th>
                <th>Post</th>
                <th>Eligibility</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={job.id}>
                  <td className="text-center fw-bold">{i + 1}</td>
                  <td>{job.title}</td>
                  <td>{job.eligibility}</td>
                  <td className="text-center">
                    <button className="btn btn-warning btn-sm" onClick={() => setSelectedJob(job)}>
                      Apply Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🔹 Application Modal */}
      {selectedJob && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
          style={{ zIndex: 2000 }}
        >
          <div
            className="bg-white p-4 rounded shadow-lg animate_animated animate_fadeInDown"
            style={{ maxWidth: "800px", width: "95%", maxHeight: "90vh", overflowY: "auto", marginTop: "80px" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h4 className="fw-bold text-warning">
                Apply for <span className="text-dark">{selectedJob.title}</span>
              </h4>
              <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={() => setSelectedJob(null)}>
                ❌
              </button>
            </div>

            <div className="alert alert-info mb-4">
              <strong>Eligibility:</strong> {selectedJob.eligibility}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name="fullName" placeholder="Full Name *" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" placeholder="Email *" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="phone" placeholder="Phone *" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <input type="date" name="dob" className="form-control" required onChange={handleChange} />
                </div>

                <div className="col-12">
                  <textarea name="permanentAddress" placeholder="Permanent Address *" className="form-control" rows="2" required onChange={handleChange}></textarea>
                </div>

                <div className="col-md-12">
                  <select name="qualification" className="form-control" required onChange={handleChange}>
                    <option value="">Select Qualification *</option>
                    <option>B.Tech / BE Civil</option>
                    <option>Diploma Civil</option>
                    <option>B.Arch</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <select name="jobRole" className="form-control" required onChange={handleChange}>
                    <option value="">Select Job Role *</option>
                    <option>Project Manager</option>
                    <option>Civil Engineer</option>
                    <option>Site Supervisor</option>
                    <option>Architect Designer</option>
                    <option>Quantity Surveyor</option>
                    <option>Lab Technician</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <input type="number" name="totalExperience" placeholder="Total Experience (Years)" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <input type="number" name="currentSalary" placeholder="Current Salary (LPA)" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <input type="number" name="expectedSalary" placeholder="Expected Salary (LPA)" className="form-control" onChange={handleChange} />
                </div>
                <div className="col-12">
                  <input type="file" name="resumeFile" accept=".pdf,.doc,.docx" className="form-control" required onChange={handleFileChange} />
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button type="submit" className="btn btn-warning fw-bold px-4">
                  🚀 Submit Application
                </button>
                <button type="button" className="btn btn-secondary px-4" onClick={() => setSelectedJob(null)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          .form-control {
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          .form-control:focus {
            border-color: #FFD700;
            box-shadow: 0 0 8px rgba(255, 215, 0, 0.8);
          }
          .alert-info {
            background: #f1f9ff;
            border-left: 5px solid #007bff;
          }
          .table-hover tbody tr:hover {
            background-color: #fff9e6 !important;
            transition: 0.3s;
          }
        `}
      </style>
    </div>
  );
}
