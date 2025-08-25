import express from "express";
const app = express();
import contactRoute from "./routes/contact.js"
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/api/contact", contactRoute);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Error:", err));
app.get("/", (req, res) => {
  res.send("Backend is running...");
});
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
