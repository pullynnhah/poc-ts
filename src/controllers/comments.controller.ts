import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthRequest } from "../protocols/auth.protocol";
import { commentsService } from "../services/comments.service";

const addComment = async (req: AuthRequest, res: Response) => {
  const content = req.body.content as string;
  const authorId = req.authorId;
  await commentsService.addComment({ content, authorId });
  return res.sendStatus(StatusCodes.CREATED);
};

const replyComment = async (req: AuthRequest, res: Response) => {
  const { commentId } = req.params;
  const content = req.body.content as string;
  const authorId = req.authorId;
  await commentsService.replyComment({ content, authorId, parentCommentId: Number(commentId) });
  return res.sendStatus(StatusCodes.CREATED);
};
export const commentsController = { addComment, replyComment };
