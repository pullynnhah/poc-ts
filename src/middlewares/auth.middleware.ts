import { AuthRequest, JWTPayload } from "../protocols/auth.protocol";
import { NextFunction, Response } from "express";
import { invalidTokenError, noTokenError } from "../errors/error";
import * as jwt from "jsonwebtoken";

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.header("Authorization");
  if (!authHeader) throw noTokenError();

  const token = authHeader.split(" ")[1];
  if (!token) throw noTokenError();

  const { authorId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
  if (!authorId) throw invalidTokenError();

  req.authorId = authorId;
  next();
};
