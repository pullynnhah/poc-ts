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
      createdAt: "desc",
    },
  });
};

const getPost = async (id: number) => {
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

  return prisma.post.findUnique({
    where: { id },
    select: {
      ...select,
      replies: {
        select,
      },
    },
  });
};

const getReplies = async (id: number) => {
  return prisma.reply.findMany({
    where: { postId: id },
    select: {
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
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const like = (table: string, id: number) => {
  return prisma[table].update({
    where: { id },
    data: {
      likes: { increment: 1 },
    },
  });
};

const search = (table: string, id: number) => {
  return prisma[table].findUnique({
    where: { id },
  });
};

const deleteItem = (table: string, id: number) => {
  return prisma[table].delete({ where: { id } });
};

export const postsRepository = { addPost, addReply, getPosts, getPost, getReplies, like, search, deleteItem };
