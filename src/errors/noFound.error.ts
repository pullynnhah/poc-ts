import { ApplicationError } from "../protocols";

export const userNotFoundError = (): ApplicationError => {
  return {
    name: "UserNotFoundError",
    message: "This user doesn't exist or was removed",
  };
};

export const postNotFoundError = (): ApplicationError => {
  return {
    name: "PostNotFoundError",
    message: "Post doesn't exist",
  };
};

export const replyNotFoundError = (): ApplicationError => {
  return {
    name: "ReplyNotFoundError",
    message: "Reply doesn't exist",
  };
};
