import { prisma } from "../config/database";
import { NewComment, ReplyComment } from "../protocols/comment.protocol";

const addComment = (data: NewComment) => {
  return prisma.comment.create({ data });
};

const replyComment = async (data: ReplyComment) => {
  return prisma.comment.create({ data });
};

const search = (table: string, id: number) => {
  return prisma[table].findUnique({
    where: { id },
  });
};

export const commentRepository = { addComment, replyComment, search };
