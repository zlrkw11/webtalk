import express from "express";

export const testRouter = express.Router();

testRouter.get("/", (req, res) => {
  res.send("Hello, World!");
});

testRouter.get("/json", (req, res) => {
  res.json({ message: "Hello, World!" });
});
