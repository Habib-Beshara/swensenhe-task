import Ajv = require('ajv')
import IRepository from '../../../abstracts/interfaces/IRepository';
import Response from '../../../services/response';
import IValidationResponse from '../../../abstracts/interfaces/IValidationResponse';
import ISimpleObject from '../../../abstracts/interfaces/ISimpleObject';
import { constructValidationResponse } from '../../../utils';
import CoffeePodType from '../abstracts/CoffeePodType';
import PackSize from '../abstracts/PackSize';
import CoffeeFlavor from '../abstracts/CoffeeFlavor';

export default class FindCoffeePods {
  private response: Response

  private filter: ISimpleObject

  schema = {
    type: 'object',
    properties: {
      productType: { type: 'string', enum: Object.values(CoffeePodType) },
      coffeeFlavor: { type: 'string', enum: Object.values(CoffeeFlavor) },
      packSize: { type: 'string', enum: Object.values(PackSize) },
    },
    additionalProperties: false,
  }

  constructor(
    private coffeePodsRepo: IRepository,
    filter: ISimpleObject = {},
  ) {
    this.response = new Response();
    this.filter = filter;
  }

  async exec(): Promise<Response> {
    this.validateInput();
    if (this.response.hasErrors() === true) return this.response;
    await this.findCoffeePods();
    return this.response;
  }

  private validateInput() {
    const validation: IValidationResponse = this.validateCoffeePodFilter(this.filter);
    if (validation.success === false) {
      this.response.addErrors(validation.errors);
    }
  }

  private validateCoffeePodFilter(filter: ISimpleObject): IValidationResponse {
    const ajv = new Ajv();
    const validate = ajv.compile(this.schema);
    const valid = validate(filter);
    return constructValidationResponse(valid, validate);
  }

  private async findCoffeePods() {
    try {
      const result = await this.coffeePodsRepo.find(this.filter);
      this.response.setPayload(result);
    } catch (e) {
      this.response.addErrors([e]);
    }
  }
}
