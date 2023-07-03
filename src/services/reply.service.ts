import { Reply } from "../protocols";
import { generalRepository, replyRepository } from "../repositories";
import { generalService } from "./general.service";
import { postNotFoundError } from "../errors";

const addReply = async (data: Reply) => {
  await generalService.checkUser(data.authorId);
  const reply = await generalRepository.search("post", data.postId);
  if (!reply) throw postNotFoundError();
  await generalRepository.addItem("reply", data);
};

const getReplies = (id: number) => {
  return replyRepository.getReplies(id);
};

export const replyService = { addReply, getReplies };
