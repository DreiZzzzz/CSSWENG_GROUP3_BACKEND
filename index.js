import router from "./routes/routes.js";

import express from "express";
import mongoose from "mongoose";
// import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";

// from ./models
import User from "./models/User.js";

//require("dotenv/config"); // put sensitive info in .env file
const app = express();
// app.use(bodyParser.json());
app.use(express.json);
app.use(cors());

// move to .env before deployment
const MONGODB_URI = process.env.MONGODB_URI;
console.log(`Connected to MongoDB: ${mongoose.connection.name}`);

// mongoose implementation
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB: ${mongoose.connection.name}`))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// start (remove after testing)
const userSchema = mongoose.Schema({
  user_name: { type: String, required: true },
  user_email: { type: String, required: true },
  user_password: { type: String, required: true },
  is_admin: { type: Boolean, default: false },
});

const user1 = new User({
  user_name: "admin123",
  user_email: "admin123@gmail.com",
  user_password: "bcfadmin1234",
  is_admin: true,
});

user1
  .save()
  .then(() => console.log("Test user saved"))
  .catch((err) => console.error("Error saving user:", err.message));
// stop (remove after testing)

// app.options("*", cors());
app.use("/", router);

const PORT = process.env.PORT || 3000;

// test log
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
