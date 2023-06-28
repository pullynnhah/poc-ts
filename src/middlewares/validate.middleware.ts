import { NextFunction, Request, Response } from "express";
import { validationError } from "../errors/error";

const validate = schema => (req: Request, res: Response, next: NextFunction) => {
  const validation = schema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const errors = validation.error.details.map(err => err.message);
    console.log(errors);
    throw validationError(errors);
  } else next();
};

export default validate;
