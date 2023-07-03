import { ApplicationError } from "../protocols";

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
