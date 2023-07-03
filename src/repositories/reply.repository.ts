import { prisma } from "../config";

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

export const replyRepository = { getReplies };
