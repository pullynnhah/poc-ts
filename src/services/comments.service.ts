import { NewComment, ReplyComment } from "../protocols/comment.protocol";
import { commentRepository } from "../repositories/comments.repository";

const addComment = async (data: NewComment) => {
  await commentRepository.addComment(data);
};

const replyComment = async (data: ReplyComment) => {
  await commentRepository.replyComment(data);
};

export const commentsService = { addComment, replyComment };
