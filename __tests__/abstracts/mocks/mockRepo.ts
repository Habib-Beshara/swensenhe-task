import BaseMongoRepository from '../../../src/abstracts/baseMongoRepository';
import mockModel from './mockModel';

export default class MockRepo extends BaseMongoRepository {
  constructor() {
    super();
    this.model = mockModel;
  }
}
