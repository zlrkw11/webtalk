import express from "express";
import { commentsRouter } from "./comments/index.js";
import { testRouter } from "./test/index.js";

export const apiRouter = express.Router();

apiRouter.use("/test", testRouter);
apiRouter.use("/comments", commentsRouter);

apiRouter.get("/", (req, res) => {
  res.send("API Router online.");
});
