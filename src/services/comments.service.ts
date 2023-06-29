import { NewComment, ReplyComment } from "../protocols/comment.protocol";
import { commentRepository } from "../repositories/comments.repository";
import { commentNotFoundError, userNotFoundError } from "../errors/error";

const addComment = async (data: NewComment) => {
  await checkUser(data.authorId);
  await commentRepository.addComment(data);
};

const replyComment = async (data: ReplyComment) => {
  await checkUser(data.authorId);
  const comment = await commentRepository.search("comment", data.parentCommentId);
  if (!comment) throw commentNotFoundError();
  await commentRepository.replyComment(data);
};

const checkUser = async (id: number) => {
  const user = await commentRepository.search("user", id);
  if (!user) throw userNotFoundError();
};

export const commentsService = { addComment, replyComment };
