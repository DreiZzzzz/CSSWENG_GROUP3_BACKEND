import express from "express";
const router = express.Router();

router.get("/test", function (req, res) {
  res.status(200).json("Hello, world!");
});

// implement other routes here

export default router;
