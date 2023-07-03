import { prisma } from "../config";

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

export const postsRepository = { getPosts, getPost };
