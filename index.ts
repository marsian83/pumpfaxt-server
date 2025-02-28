import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import indexRouter from "./src/routes/_index";

import { ensureConfig } from "./src/utils";

const PORT = Number(process.env.PORT) || 9000;

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded());

app.use("/", indexRouter);

async function main() {
  console.log("Attempting Boot");
  if (!process.env.MONGODB_URI) throw new Error("Connection URI missing");

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database Connection established");

  await ensureConfig();

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}

main();
