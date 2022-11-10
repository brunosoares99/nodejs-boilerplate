import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { router } from "src/routes/routes";

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL || "";
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

mongoose.connect(DATABASE_URL).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => `Server is running on port ${PORT}`);
}).catch((err) => {
  console.log(err);
});
