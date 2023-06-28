import Joi from "joi";
import { SigninUser, SignupUser } from "../protocols/user.protocol";

const signupSchema = Joi.object<SignupUser>({
  username: Joi.string().required(),
  image: Joi.string().required(),
  password: Joi.string().required(),
});

const signinSchema = Joi.object<SigninUser>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const authSchema = { signupSchema, signinSchema };
