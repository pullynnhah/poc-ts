import { User } from "@prisma/client";

export type SignupUser = Omit<User, "id">;
export type SigninUser = Omit<SignupUser, "image">;
export type Token = { token: string };
