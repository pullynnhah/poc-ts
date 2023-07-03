import { ApplicationError } from "../protocols";

export const schemaValidationError = (errors: string[]): ApplicationError => {
  return {
    name: "SchemaValidationError",
    message: errors,
  };
};
