import express from "express";
import { connectToMongo, openExpressServer } from "./startup.js";

const app = express();

app.use(express.json());

connectToMongo();
openExpressServer(app);
