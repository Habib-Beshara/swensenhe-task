import { ErrorObject } from 'ajv';
import IValidationResponse from './abstracts/interfaces/IValidationResponse';
import ValidationError from './services/validationError';
import IValidationErrorDetails from './abstracts/interfaces/IValidationErrorDetails';

export const ajvErrorToValidationErrorDetails = (
  errors: ErrorObject[],
): IValidationErrorDetails[] => {
  return errors.map((error) => {
    return {
      path: error.propertyName,
      errorCode: error.keyword,
      message: error.message,
    };
  });
};

export const constructValidationResponse = (valid, validate): IValidationResponse => {
  const res: IValidationResponse = {
    success: valid,
  };
  if (valid === false) {
    res.errors = ajvErrorToValidationErrorDetails(validate.errors)
      .map((error) => {
        return new ValidationError(error);
      });
  }
  return res;
};
