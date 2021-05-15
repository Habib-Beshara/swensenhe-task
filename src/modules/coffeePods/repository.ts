import BaseMongoRepository from '../../abstracts/baseMongoRepository';
import coffeePodModel from './model';

export default class CoffeePodRepository extends BaseMongoRepository {
  constructor() {
    super();
    this.model = coffeePodModel;
  }
}
