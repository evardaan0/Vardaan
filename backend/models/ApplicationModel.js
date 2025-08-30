const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    unique: true,
  },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date ,required:true},
  permanentAddress: { type: String, required: true },
  qualification: { type: String, required: true },
  jobRole: { type: String, default: " " },
  totalExperience: { type: Number, required: true },
  currentSalary: { type: Number,required:true },
  expectedSalary: { type: Number,required:true },
  resumeFile: { type: String, required: true },
  appliedDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Pending", "Reviewed", "Shortlisted", "Rejected", "Hired"],
    default: "Pending",
  },
});

// 🔹 Pre-save hook to generate unique applicationId
applicationSchema.pre("save", async function (next) {
  if (!this.applicationId) {
    const count = await mongoose.model("Application").countDocuments();
    this.applicationId = `APP-${(count + 1).toString().padStart(4, "0")}`;
  }
  next();
});

module.exports = mongoose.model("Application", applicationSchema);
