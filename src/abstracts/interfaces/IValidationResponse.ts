import ValidationError from '../../services/validationError';

interface IValidationResponse {
  success: boolean;
  errors?: ValidationError[];
}

export default IValidationResponse;
