import { postNotFoundError, replyNotFoundError, userNotFoundError } from "../errors";
import { generalRepository } from "../repositories";

const like = async (table: string, id: number) => {
  const errors = {
    post: postNotFoundError(),
    reply: replyNotFoundError(),
  };
  const item = await generalRepository.search(table, id);
  if (!item) throw errors[table];
  return generalRepository.like(table, id);
};

const checkUser = async (id: number) => {
  const user = await generalRepository.search("user", id);
  if (!user) throw userNotFoundError();
};

const deleteItem = async (table: string, id: number) => {
  const errors = {
    post: postNotFoundError(),
    reply: replyNotFoundError(),
  };
  const item = await generalRepository.search(table, id);
  if (!item) throw errors[table];

  return generalRepository.deleteItem(table, id);
};

export const generalService = { like, checkUser, deleteItem };
