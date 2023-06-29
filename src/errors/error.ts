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
