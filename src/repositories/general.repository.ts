import { prisma } from "../config";
import { Post, Reply } from "../protocols";

const addItem = (table: string, data: Post | Reply) => {
  return prisma[table].create({ data });
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

export const generalRepository = { addItem, like, search, deleteItem };
