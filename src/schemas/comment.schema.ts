import Joi from "joi";
import { NewComment } from "../protocols/comment.protocol";

const commentSchema = Joi.object<Pick<NewComment, "content">>({ content: Joi.string().required().max(500) });

export { commentSchema };
