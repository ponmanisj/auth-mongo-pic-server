import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";
import path from "path";


dotenv.config();

const app = express();
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(users);

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
