import { ApplicationError } from "../protocols/error.protocol";

export function duplicatedUsernameError(): ApplicationError {
  return {
    name: "DuplicatedUsernameError",
    message: "There is already someone with that username",
  };
}

export function invalidCredentialsError(): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "username or password are incorrect",
  };
}

export function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export function unauthorizedAccess(): ApplicationError {
  return {
    name: "UnauthorizedAccess",
    message: "You don't have access",
  };
}

export function noTokenAccess(): ApplicationError {
  return {
    name: "UnauthorizedAccess",
    message: "You must have a token",
  };
}
