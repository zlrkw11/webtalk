import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = model("Comment", commentSchema);
