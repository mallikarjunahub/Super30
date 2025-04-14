import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { studentModel } from "../models/student.js";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(console.log("mongoose connected"))
  .catch((error) => console.log("connection failed", error));

app.get("/students", async (req, res) => {
  let allStudents = await studentModel.find();
  console.log(allStudents);
  res.json(allStudents);
});

app.post("/students", async (req, res) => {
  console.log("data came to backend");
  console.log(req.body);
  await studentModel.create(req.body);
  console.log("data saved in DB");
  res.json("data saved in DB");
});

app.get("/students/id", async (req, res) => {
  console.log(req.body._id);
  let singleStudent = await studentModel.findById(req.body._id);
  console.log(singleStudent);
  res.json(singleStudent);
});

app.put("/students/id", async (req, res) => {
  console.log("data came to backend");
  console.log(req.body);
  try {
    const updated = await studentModel.findOneAndUpdate(
      { _id: req.body._id },
      { name: req.body.name, department: req.body.department },
      { new: true }
    );
    console.log("data updated in DB", updated);
    res.json({ updated: updated });
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: error.message });
  }
});

app.delete("/students/id", async (req, res) => {
  console.log(req.body._id);
  try {
    const deletedData = await studentModel.findByIdAndDelete(req.body._id);
    console.log("deleted student", deletedData);
    res.json({ deleted: deletedData });
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: error.message });
  }
});

export default app;
