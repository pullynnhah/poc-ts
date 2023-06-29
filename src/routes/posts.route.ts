import { Router } from "express";
import { postsController } from "../controllers/posts.controller";
import { contentSchema } from "../schemas/post.schema";
import { validate } from "../middlewares/validate.middleware";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();
router.post("/posts", authenticateToken, validate(contentSchema), postsController.addPost);
router.get("/posts", postsController.getPosts);

router.patch("/posts/:postId", postsController.likePost);
router.get("/posts/:postId", postsController.getPost);
router.delete("/posts/:postId", postsController.deletePost);

router.post("/reply/:postId", authenticateToken, validate(contentSchema), postsController.addReply);
router.get("/reply/:postId", postsController.getReplies);
router.patch("/reply/:replyId", postsController.likeReply);
router.delete("/reply/:replyId", authenticateToken, postsController.deleteReply);
export default router;
