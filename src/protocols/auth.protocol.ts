import { Request } from "express";

export type JWTPayload = { authorId: number };
export type AuthRequest = Request & JWTPayload;
