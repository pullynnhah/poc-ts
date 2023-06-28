import bcrypt from "bcrypt";
import { AuthUser } from "../protocols/user.protocol";
import { duplicatedUsernameError } from "../errors/error";
import { authRepository } from "../repositories/auth.repository";

const signup = async (data: AuthUser) => {
  const user = await authRepository.searchUser(data.username);
  if (user) throw duplicatedUsernameError();
  return authRepository.createUser({
    ...data,
    password: bcrypt.hashSync(data.password, 10),
  });
};

export const authService = { signup };
