import { Model } from 'mongoose';
import IRepository from './interfaces/IRepository';
import ISimpleObject from './interfaces/ISimpleObject';

export default abstract class BaseMongoRepository implements IRepository {
  protected model: Model<any>

  find(filter?: ISimpleObject) {
    return this.model.find(filter).exec();
  }
}
