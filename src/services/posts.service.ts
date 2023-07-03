import { Post } from "../protocols";
import { generalRepository, postsRepository } from "../repositories";
import { generalService } from "./general.service";

const addPost = async (data: Post) => {
  await generalService.checkUser(data.authorId);
  await generalRepository.addItem("post", data);
};

const getPosts = () => {
  return postsRepository.getPosts();
};

const getPost = (id: number) => {
  return postsRepository.getPost(id);
};

export const postsService = { addPost, getPosts, getPost };
