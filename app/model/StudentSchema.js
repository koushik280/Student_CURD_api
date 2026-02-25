const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be at least 1"],
    },
    grade: {
      type: String,
      required: [true, "Grade is required"],
      enum: ["A", "B", "C", "D", "F"], // optional validation
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt fields
  },
);
module.exports =mongoose.model("Student",studentSchema)