import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { Express, json } from "express";

import { connectDB } from "./config";
import { errorHandler } from "./middlewares";
import { authRouter, postRouter, replyRouter } from "./routes";

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.use(authRouter);
app.use("/posts", postRouter);
app.use("/reply", replyRouter);
app.use(errorHandler);

function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

init().then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)));
