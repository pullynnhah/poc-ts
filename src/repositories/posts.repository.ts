import { prisma } from "../config/database";
import { Post, Reply } from "../protocols/post.protocol";

const addPost = (data: Post) => {
  return prisma.post.create({ data });
};

const addReply = async (data: Reply) => {
  return prisma.reply.create({ data });
};

const getPosts = async () => {
  const select = {
    id: true,
    content: true,
    likes: true,
    createdAt: true,
    updatedAt: true,
    author: {
      select: {
        username: true,
        image: true,
      },
    },
  };

  return prisma.post.findMany({
    select: {
      ...select,
      replies: {
        select,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

const search = (table: string, id: number) => {
  return prisma[table].findUnique({
    where: { id },
  });
};

export const postsRepository = { addPost, addReply, getPosts, search };
