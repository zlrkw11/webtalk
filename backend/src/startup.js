import mongoose from "mongoose";
import { MONGO_URI } from "./config";

export function initMongoose() {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
  mongoose.connection.on("open", () => {
    console.log("Connected to MongoDB");
  });
}