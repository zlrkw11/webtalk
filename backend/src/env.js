import dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const NODE_ENV = env.NODE_ENV || "development";
export const PORT = env.PORT || 3000;
export const MONGO_URI = env.MONGO_URI || "mongodb://localhost:27017/webtalk";