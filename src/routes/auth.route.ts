import { Router } from "express";

import { authController } from "../controllers";
import { authSchema } from "../schemas";
import { validate } from "../middlewares";

const authRouter = Router();

authRouter.post("/signup", validate(authSchema.signupSchema), authController.signup);
authRouter.post("/signin", validate(authSchema.signinSchema), authController.signin);

export { authRouter };
