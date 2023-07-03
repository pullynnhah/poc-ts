import { Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AuthRequest } from "../protocols";
import { postsService, generalService } from "../services";

const addPost = async (req: AuthRequest, res: Response) => {
  const content = req.body.content as string;
  const authorId = req.authorId;
  await postsService.addPost({ content, authorId });
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

const likePost = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  await generalService.like("post", Number(postId));
  res.sendStatus(StatusCodes.NO_CONTENT);
};

const deletePost = async (req: AuthRequest, res: Response) => {
  const { postId } = req.params;
  await generalService.deleteItem("post", Number(postId));
  res.sendStatus(StatusCodes.NO_CONTENT);
};

export const postsController = {
  addPost,
  getPosts,
  getPost,
  likePost,
  deletePost,
};
