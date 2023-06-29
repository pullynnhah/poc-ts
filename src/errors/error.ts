import { ApplicationError } from "../protocols/error.protocol";

export const usernameExistsError = (): ApplicationError => {
  return {
    name: "UsernameExistsError",
    message: "Username already in use",
  };
};

export const authError = (): ApplicationError => {
  return {
    name: "AuthError",
    message: "Username or password are incorrect",
  };
};

export const noTokenError = (): ApplicationError => {
  return {
    name: "NoTokenError",
    message: "You must have a token",
  };
};

export const invalidTokenError = (): ApplicationError => {
  return {
    name: "InvalidTokenError",
    message: "Your token is invalid",
  };
};

export const userNotFoundError = (): ApplicationError => {
  return {
    name: "UserNotFoundError",
    message: "This user doesn't exist or was removed",
  };
};

export const commentNotFoundError = (): ApplicationError => {
  return {
    name: "CommentNotFoundError",
    message: "The comment you are trying to reply doesn't exist",
  };
};

export const notFoundError = (): ApplicationError => {
  return {
    name: "NotFoundError",
    message: "No result for this search",
  };
};

export const validationError = (errors: string[]): ApplicationError => {
  return {
    name: "ValidationError",
    message: errors,
  };
};
