import express, { Express, json } from "express";
import cors from "cors";
import "dotenv/config";
import authRoute from "./routes/auth.route";
import { connectDb } from "./config/database";

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(json());

app.use(authRoute);

function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

init().then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)));
