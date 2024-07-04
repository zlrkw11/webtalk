import express from "express";
import { apiRouter } from "./routes/index.js";
import { connectToMongo, openExpressServer } from "./startup.js";

const app = express();
app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

connectToMongo();
openExpressServer(app);
