// add .env to .gitignore later (when in production)

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// to be used later
const cors = require("cors");
//require("dotenv/config"); // put sensitive info in .env file

const PORT = process.env.PORT || 3000;

console.log("GROUP 3 BACKEND SERVER");
console.log("TEST PORT: " + PORT);
