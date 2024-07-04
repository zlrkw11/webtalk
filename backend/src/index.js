import express from "express";
import { PORT } from "./env";

const app = express();



app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server running at http://localhost:${PORT}`);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
