import mongoose from "mongoose";
import { MONGO_URI, NODE_ENV, PORT } from "./env.js";

export function connectToMongo() {
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

export function openExpressServer(app) {
  app.listen(PORT, () => {
    if (NODE_ENV === "development") {
      console.log(`Server running at http://localhost:${PORT}`);
    } else {
      console.log(`Server running on port ${PORT}`);
    }
  });
}