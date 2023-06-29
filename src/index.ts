import "dotenv/config";
import "express-async-errors";
import cors from "cors";
import express, { Express, json } from "express";

import authRoute from "./routes/auth.route";
import { connectDb } from "./config/database";
import { errorHandler } from "./middlewares/error.middleware";
import commentsRoute from "./routes/posts.route";

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.use(authRoute);
app.use(commentsRoute);
app.use(errorHandler);

function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

init().then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)));
