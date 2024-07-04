import express from "express";
import { Comment } from "../../models/comment.js";

export const commentsRouter = express.Router();

commentsRouter.get("/", async (req, res) => {
  const comments = await Comment.find({});
  res.json(comments);
});

commentsRouter.post("/", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});
