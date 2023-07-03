import * as jwt from "jsonwebtoken";

import { AuthRequest, JWTPayload } from "../protocols";
import { NextFunction, Response } from "express";

import { noTokenError } from "../errors";

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.header("Authorization");
  if (!authHeader) throw noTokenError();

  const token = authHeader.split(" ")[1];
  if (!token) throw noTokenError();

  const { authorId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
  req.authorId = authorId;

  next();
};
