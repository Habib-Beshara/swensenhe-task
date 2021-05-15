import IValidationErrorDetails from '../abstracts/interfaces/IValidationErrorDetails';

export default class ValidationError extends Error {
  private errors: IValidationErrorDetails[] = []

  constructor(errorDetails: IValidationErrorDetails) {
    super();
    this.errors.push(errorDetails);
  }

  getErrors() {
    return this.errors;
  }
}
