import "dotenv/config";
import app from "./routes/studentRoutes.js";

app.listen(process.env.PORT, () => {
  console.log(`server is listening at ${process.env.PORT}`);
});
