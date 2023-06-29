import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

import { SigninUser, SignupUser, Token } from "../protocols/user.protocol";
import { authError, usernameExistsError } from "../errors/error";
import { authRepository } from "../repositories/auth.repository";

const signup = async (data: SignupUser): Promise<User> => {
  const user = await authRepository.searchUser(data.username);
  if (user) throw usernameExistsError();
  return authRepository.createUser({
    ...data,
    password: bcrypt.hashSync(data.password, 10),
  });
};

const signin = async (data: SigninUser): Promise<Token> => {
  const user = await validateUsername(data.username);
  await validatePassword(data.password, user.password);

  return await generateToken(user.id);
};

const validateUsername = async (username: string): Promise<User> => {
  const user = await authRepository.searchUser(username);
  if (!user) throw authError();
  return user;
};

const validatePassword = async (password: string, userPassword: string): Promise<void> => {
  if (!bcrypt.compareSync(password, userPassword)) throw authError();
};

const generateToken = async (authorId: number): Promise<Token> => {
  return {
    token: jwt.sign({ authorId }, process.env.JWT_SECRET),
  };
};

export const authService = { signup, signin };
