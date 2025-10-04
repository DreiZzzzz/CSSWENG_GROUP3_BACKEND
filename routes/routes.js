import express from "express";
import { userLogIn } from "../services/user.js";

const router = express.Router();

router.get("/test", function (req, res) {
  res.status(200).json("Hello, world! HAHA");
});

// implement other routes here
router.post("/user/login", userLogIn);

export default router;
