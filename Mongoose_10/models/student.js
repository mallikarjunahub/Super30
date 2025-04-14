import mongoose from "mongoose";

const Schema = mongoose.Schema;
const students = new Schema({
  name: { type: String, required: true },
  age: Number,
  department: String,
  admissionDate: Date,
});

export const studentModel = mongoose.model("students", students);
