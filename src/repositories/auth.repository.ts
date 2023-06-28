import { prisma } from "../config/database";
import { AuthUser } from "../protocols/user.protocol";

const searchUser = (username: string) => {
  console.log("R 5");
  return prisma.user.findUnique({
    where: { username },
  });
};

const createUser = async (data: AuthUser) => {
  return prisma.user.create({ data });
};
export const authRepository = { searchUser, createUser };
