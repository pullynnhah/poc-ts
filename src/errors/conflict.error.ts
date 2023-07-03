import { ApplicationError } from "../protocols";

export const usernameExistsError = (): ApplicationError => {
  return {
    name: "UsernameExistsError",
    message: "Username already in use",
  };
};
