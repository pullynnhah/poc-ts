import { Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AuthRequest } from "../protocols";
import { replyService, generalService } from "../services";

const addReply = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  const content = req.body.content as string;
  const authorId = req.authorId;
  await replyService.addReply({ content, authorId, postId: Number(postId) });
  return res.sendStatus(StatusCodes.CREATED);
};

const getReplies = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  const posts = await replyService.getReplies(Number(postId));
  res.send(posts);
};

const likeReply = async (req: AuthRequest, res: Response) => {
  const { replyId } = req.params;
  await generalService.like("reply", Number(replyId));
  res.sendStatus(StatusCodes.NO_CONTENT);
};

const deleteReply = async (req: AuthRequest, res: Response) => {
  const { replyId } = req.params;
  await generalService.deleteItem("reply", Number(replyId));
  res.sendStatus(StatusCodes.NO_CONTENT);
};

export const replyController = {
  addReply,
  getReplies,
  likeReply,
  deleteReply,
};
