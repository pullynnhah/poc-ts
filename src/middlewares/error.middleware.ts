import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApplicationError } from "../protocols/error.protocol";

export const errorHandler = (error: ApplicationError, req: Request, res: Response, next: NextFunction) => {
  if (error.name === "UsernameExistsError") res.status(StatusCodes.CONFLICT);
  if (error.name === "AuthError") res.status(StatusCodes.UNAUTHORIZED);
  if (error.name === "NoTokenError") res.status(StatusCodes.FORBIDDEN);
  if (error.name === "NotFoundError") res.status(StatusCodes.NOT_FOUND);
  res.send({ error: error.message });
};
