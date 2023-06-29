import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthRequest } from "../protocols/auth.protocol";
import { postsService } from "../services/posts.service";

const addPost = async (req: AuthRequest, res: Response) => {
  const content = req.body.content as string;
  const authorId = req.authorId;
  await postsService.addPost({ content, authorId });
  return res.sendStatus(StatusCodes.CREATED);
};

const addReply = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  const content = req.body.content as string;
  const authorId = req.authorId;
  await postsService.addReply({ content, authorId, postId: Number(postId) });
  return res.sendStatus(StatusCodes.CREATED);
};

const getPosts = async (req: AuthRequest, res: Response) => {
  const posts = await postsService.getPosts();
  res.send(posts);
};

const getPost = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  const posts = await postsService.getPost(Number(postId));
  res.send(posts);
};

const getReplies = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  const posts = await postsService.getReplies(Number(postId));
  res.send(posts);
};

export const postsController = { addPost, addReply, getPosts, getPost, getReplies };
