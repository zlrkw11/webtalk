import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV, PORT } from "./env.js";

export function connectToMongo() {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error(err);
    });
}

export function openExpressServer(app) {
  app.listen(PORT, () => {
    if (NODE_ENV === "development") {
      console.log(`Server running at http://localhost:${PORT}`);
    } else {
      console.log(`Server running on port ${PORT}`);
    }
  });
}