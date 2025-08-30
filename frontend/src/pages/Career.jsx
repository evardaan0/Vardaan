import React, { useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../App"; // Use the centralized backend URL

export default function Career() {
  const API_URL = useContext(ApiContext); // This will be https://vardaan-d6l4.onrender.com in production
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("dob", formData.dob);
    data.append("permanentAddress", formData.permanentAddress);
    data.append("qualification", formData.qualification);
    data.append("jobRole", selectedJob?.title || formData.jobRole);
    data.append("totalExperience", formData.totalExperience);
    data.append("currentSalary", formData.currentSalary);
    data.append("expectedSalary", formData.expectedSalary);
    data.append("resumeFile", formData.resumeFile);

    try {
      const res = await axios.post(`${API_URL}/api/apply`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Application submitted successfully!");
      console.log("Saved Application:", res.data);
      setSelectedJob(null);
      setFormData({
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
    } catch (err) {
      console.error("❌ Error submitting application:", err.response?.data || err.message);
      alert("❌ Error submitting application");
    }
  };

  return (
    <div>
      {/* Hero Section, About, Jobs Table same as your previous code */}
      {/* ... keep your HTML content as it is ... */}

      {/* Application Modal */}
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
              {/* Keep your form inputs as in your previous code */}
              {/* They will now submit to your Render backend */}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
