export type Post = {
  authorId: number;
  content: string;
};

export type Reply = Post & { postId: number };
