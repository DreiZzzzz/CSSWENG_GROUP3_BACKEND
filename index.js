// add .env to .gitignore later (when in production)
import router from "./routes/routes.js";

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

//require("dotenv/config"); // put sensitive info in .env file
const app = express();
app.use(bodyParser.json());
app.use(cors());

// mongoose start

// mongoose end

// app.options("*", cors());
app.use("/", router);

const PORT = process.env.PORT || 3000;

// test log
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
