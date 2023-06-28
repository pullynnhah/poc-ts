import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { SigninUser, SignupUser } from "../protocols/user.protocol";
import { authService } from "../services/auth.service";

const signup = async (req: Request, res: Response) => {
  const body = req.body as SignupUser;

  await authService.signup(body);
  return res.sendStatus(StatusCodes.CREATED);
};

const signin = async (req: Request, res: Response) => {
  const body = req.body as SigninUser;

  const token = await authService.signin(body);
  return res.status(StatusCodes.OK).send(token);
};

export const authController = { signup, signin };
