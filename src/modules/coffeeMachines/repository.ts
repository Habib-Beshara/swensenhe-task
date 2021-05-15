import BaseMongoRepository from '../../abstracts/baseMongoRepository';
import coffeeMachineModel from './model';

export default class CoffeeMachineRepository extends BaseMongoRepository {
  constructor() {
    super();
    this.model = coffeeMachineModel;
  }
}
