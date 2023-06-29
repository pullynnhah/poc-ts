import { Router } from "express";
import { commentsController } from "../controllers/comments.controller";
import { commentSchema } from "../schemas/comment.schema";
import { validate } from "../middlewares/validate.middleware";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();
router.post("/comments/new", authenticateToken, validate(commentSchema), commentsController.addComment);
router.post("/comments/reply/:commentId", authenticateToken, validate(commentSchema), commentsController.replyComment);
// router.get("/comments", authController.signin);

export default router;
