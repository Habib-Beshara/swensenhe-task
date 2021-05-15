import Ajv = require('ajv')
import IRepository from '../../../abstracts/interfaces/IRepository';
import Response from '../../../services/response';
import IValidationResponse from '../../../abstracts/interfaces/IValidationResponse';
import CoffeeMachineType from '../abstracts/CoffeeMachineType';
import ISimpleObject from '../../../abstracts/interfaces/ISimpleObject';
import { constructValidationResponse } from '../../../utils';

export default class FindCoffeeMachines {
  private response: Response

  private filter: ISimpleObject

  schema = {
    type: 'object',
    properties: {
      productType: { type: 'string', enum: Object.values(CoffeeMachineType) },
      waterLineCompatible: { type: 'boolean' },
    },
    additionalProperties: false,
  }

  constructor(
    private coffeeMachinesRepo: IRepository,
    filter: ISimpleObject = {},
  ) {
    this.response = new Response();
    this.filter = filter;
  }

  async exec(): Promise<Response> {
    this.validateInput();
    if (this.response.hasErrors() === true) return this.response;
    await this.findCoffeeMachines();
    return this.response;
  }

  private validateInput() {
    const validation: IValidationResponse = this.validateCoffeeMachineFilter(this.filter);
    if (validation.success === false) {
      this.response.addErrors(validation.errors);
    }
  }

  private validateCoffeeMachineFilter(filter: ISimpleObject): IValidationResponse {
    const ajv = new Ajv();
    const validate = ajv.compile(this.schema);
    const valid = validate(filter);
    return constructValidationResponse(valid, validate);
  }

  private async findCoffeeMachines() {
    try {
      const result = await this.coffeeMachinesRepo.find(this.filter);
      this.response.setPayload(result);
    } catch (e) {
      this.response.addErrors([e]);
    }
  }
}
