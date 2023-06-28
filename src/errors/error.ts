import { ApplicationError } from "../protocols/error.protocol";

export function usernameExistsError(): ApplicationError {
  return {
    name: "UsernameExistsError",
    message: "Username already in use",
  };
}

export function authError(): ApplicationError {
  return {
    name: "AuthError",
    message: "Username or password are incorrect",
  };
}

export function noTokenError(): ApplicationError {
  return {
    name: "NoTokenError",
    message: "You must have a token",
  };
}

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search",
  };
}
