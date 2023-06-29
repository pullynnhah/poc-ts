import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authSchema } from "../schemas/auth.schema";
import { validate } from "../middlewares/validate.middleware";

const router = Router();

router.post("/signup", validate(authSchema.signupSchema), authController.signup);
router.post("/signin", validate(authSchema.signinSchema), authController.signin);

export default router;
