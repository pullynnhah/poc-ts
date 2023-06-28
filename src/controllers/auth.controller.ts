import { StatusCodes } from "http-status-codes";

import { Request, Response } from "express";
import { SigninUser, SignupUser } from "../protocols/user.protocol";
import { authService } from "../services/auth.service";

const signup = async (req: Request, res: Response) => {
  const body = req.body as SignupUser;
  try {
    await authService.signup(body);
    return res.sendStatus(StatusCodes.CREATED);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

const signin = async (req: Request, res: Response) => {
  const body = req.body as SigninUser;
  try {
    const token = await authService.signin(body);
    return res.status(StatusCodes.OK).send(token);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
export const authController = { signup, signin };
