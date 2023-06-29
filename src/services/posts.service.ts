import { Post, Reply } from "../protocols/post.protocol";
import { postsRepository } from "../repositories/posts.repository";
import { postNotFoundError, replyNotFoundError, userNotFoundError } from "../errors/error";

const addPost = async (data: Post) => {
  await checkUser(data.authorId);
  await postsRepository.addPost(data);
};

const addReply = async (data: Reply) => {
  await checkUser(data.authorId);
  const reply = await postsRepository.search("post", data.postId);
  if (!reply) throw postNotFoundError();
  await postsRepository.addReply(data);
};

const getPosts = () => {
  return postsRepository.getPosts();
};

const getPost = (id: number) => {
  return postsRepository.getPost(id);
};

const getReplies = (id: number) => {
  return postsRepository.getReplies(id);
};

const like = async (table: string, id: number) => {
  const errors = {
    post: postNotFoundError(),
    reply: replyNotFoundError(),
  };
  const item = await postsRepository.search(table, id);
  if (!item) throw errors[table];
  return postsRepository.like(table, id);
};

const checkUser = async (id: number) => {
  const user = await postsRepository.search("user", id);
  if (!user) throw userNotFoundError();
};

const deleteItem = async (table: string, id: number) => {
  const errors = {
    post: postNotFoundError(),
    reply: replyNotFoundError(),
  };
  const item = await postsRepository.search(table, id);
  if (!item) throw errors[table];

  return postsRepository.deleteItem(table, id);
};
export const postsService = { addPost, addReply, getPosts, getReplies, like, getPost, deleteItem };
