import mongoose from "mongoose";

const Schema = mongoose.Schema;
const students = new Schema({
  name: String,
  age: Number,
  department: String,
  admissionDate: Date,
});

export const studentsModel = mongoose.model("students", students);
