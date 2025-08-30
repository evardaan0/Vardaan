const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Review", ReviewSchema);
