import MockRepo from './mocks/mockRepo';
import createConnection from '../../src/services/dbConnection';
import mockModel from './mocks/mockModel';
import CoffeeMachineType from '../../src/modules/coffeeMachines/abstracts/CoffeeMachineType'

let mockRepo;
let connection;
beforeAll(async () => {
  mockRepo = new MockRepo();
  connection = await createConnection()
    .catch((e) => {
      console.log(`[error connection to mongoose] ${e}`);
    });
});

afterAll(async () => {
  // clean up then disconnect
  mockModel.remove({}, () => {
    connection.disconnect();
  });
});

describe('Given a base mongo repository', () => {
  it('should be able to get data using find()', async () => {
    await mockModel.create({
      name: 'test-name',
      description: 'here is some description',
    });
    const res = await mockRepo.find();
    expect(res[0]).toHaveProperty('name', 'test-name');
  });

  it('should be able to get data using find()', async () => {
    await mockModel.create({
      name: 'test-name2',
      description: 'description2',
    });
    const res = await mockRepo.find({ name: 'test-name2' });
    expect(res instanceof Array).toBe(true);
    expect(res.length).toBe(1);
    expect(res[0]).toHaveProperty('description', 'description2');
  });

});
