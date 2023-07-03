import { prisma } from "../config";
import { SignupUser } from "../protocols";

const searchUser = (username: string) => {
  return prisma.user.findUnique({
    where: { username },
  });
};

const createUser = async (data: SignupUser) => {
  return prisma.user.create({ data });
};
export const authRepository = { searchUser, createUser };
