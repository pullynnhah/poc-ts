import { StatusCodes } from "http-status-codes";

import { Request, Response } from "express";
import { AuthUser } from "../protocols/user.protocol";
import { authService } from "../services/auth.service";

const signup = async (req: Request, res: Response) => {
  const body = req.body as AuthUser;
  try {
    await authService.signup(body);
    return res.sendStatus(StatusCodes.CREATED);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const authController = { signup };
