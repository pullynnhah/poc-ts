import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ApplicationError } from "../protocols";

export const errorHandler = (error: ApplicationError, req: Request, res: Response, next: NextFunction): void => {
  const conflictErrors = ["UsernameExistsError"];
  const noFoundErrors = ["UserNotFoundError", "PostNotFoundError", "ReplyNotFoundError", "JsonWebTokenError"];
  const schemaErrors = ["SchemaValidationError"];
  const authErrors = ["AuthError", "NoTokenError"];
  if (conflictErrors.includes(error.name)) res.status(StatusCodes.CONFLICT);
  if (authErrors.includes(error.name)) res.status(StatusCodes.UNAUTHORIZED);
  if (noFoundErrors.includes(error.name)) res.status(StatusCodes.NOT_FOUND);
  if (schemaErrors.includes(error.name)) res.status(StatusCodes.UNPROCESSABLE_ENTITY);
  res.send({ error: error.message });
};
