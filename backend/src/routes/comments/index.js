import express from "express";
import { testComments } from "./testData.js";

export const commentsRouter = express.Router();

commentsRouter.get("/", (req, res) => {
  res.send(testComments);
});
