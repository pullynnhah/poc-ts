import express, { json, Request, Response } from "express";
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(json());

const { PORT } = process.env;
app.get("/hello", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Hello, World");
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
