import Joi from "joi";
import { Post } from "../protocols";

const contentSchema = Joi.object<Pick<Post, "content">>({ content: Joi.string().required().max(500) });

export { contentSchema };
