import express, { request, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import "dotenv/config";

const app = express();
const { PORT } = process.env;
app.get("/hello", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send("Hello, World");
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
