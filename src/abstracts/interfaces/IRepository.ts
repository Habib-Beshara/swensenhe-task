import ISimpleObject from './ISimpleObject';

interface IRepository {
  find (filter?: ISimpleObject): Promise<any[]>;
}

export default IRepository;
