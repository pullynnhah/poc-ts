import { Router } from "express";

import { authenticateToken, validate } from "../middlewares";
import { contentSchema } from "../schemas";
import { replyController } from "../controllers";

const replyRouter = Router();

replyRouter.post("/:postId", authenticateToken, validate(contentSchema), replyController.addReply);
replyRouter.get("/:postId", replyController.getReplies);
replyRouter.patch("/like/:replyId", replyController.likeReply);
replyRouter.delete("/:replyId", authenticateToken, replyController.deleteReply);

export { replyRouter };
