import { Router } from "express";

import { contentSchema } from "../schemas";
import { postsController } from "../controllers";
import { validate, authenticateToken } from "../middlewares";

const postRouter = Router();
postRouter.post("/", authenticateToken, validate(contentSchema), postsController.addPost);
postRouter.get("/", postsController.getPosts);

postRouter.patch("/like/:postId", postsController.likePost);
postRouter.get("/:postId", postsController.getPost);
postRouter.delete("/:postId", postsController.deletePost);

export { postRouter };
