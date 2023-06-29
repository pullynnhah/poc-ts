export type NewComment = {
  authorId: number;
  content: string;
};

export type ReplyComment = NewComment & { parentCommentId: number };
