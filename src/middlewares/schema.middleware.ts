import { NextFunction, Request, Response } from "express";
import { schemaValidationError } from "../errors";
import Joi from "joi";

const validate =
  (schema: Joi.ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      const errors = validation.error.details.map(err => err.message);
      throw schemaValidationError(errors);
    } else next();
  };

export { validate };
