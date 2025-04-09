import express from "express";
import "dotenv/config";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());
app.use("/", studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is listening at ${process.env.PORT}`);
});
