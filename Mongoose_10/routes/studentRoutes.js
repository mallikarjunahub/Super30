import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { studentsModel } from "../models/student.js";

const app = express();
app.use(express.json());
const router = express.Router();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(console.log("mongoose connected"))
  .catch((error) => console.log("connection failed", error));

router.get("/students", async (req, res) => {
  let allStudents = await studentsModel.find();
  console.log(allStudents);
  res.json(allStudents);
});

router.post("/students", async (req, res) => {
  console.log("data came to backend");
  console.log(req.body);
  await studentsModel.create(req.body);
  console.log("data saved in DB");
  res.json("data saved in DB");
});

router.get("/students/id", async (req, res) => {
  console.log(req.body._id);
  let singleStudent = await studentsModel.findById(req.body._id);
  console.log(singleStudent);
  res.json(singleStudent);
});

router.put("/students/id", async (req, res) => {
  console.log("data came to backend");
  console.log(req.body);
  try {
    const updated = await studentsModel.findOneAndUpdate(
      { name: req.body._id },
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

router.delete("/students/id", async (req, res) => {
  console.log(req.body._id);
  try {
    await studentsModel.findByIdAndDelete(req.body._id);
    console.log("deleted student");
    res.json("student dropped");
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: error.message });
  }
});

export default router;
