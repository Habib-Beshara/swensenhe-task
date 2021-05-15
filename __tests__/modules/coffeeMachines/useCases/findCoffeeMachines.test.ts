import FindCoffeeMachines
  from '../../../../src/modules/coffeeMachines/use-cases/findCoffeeMachines';
import CoffeeMachineType from '../../../../src/modules/coffeeMachines/abstracts/CoffeeMachineType';
import CoffeeMachineRepository from '../../../../src/modules/coffeeMachines/repository';
import createConnection from '../../../../src/services/dbConnection';
import Response from '../../../../src/services/response';

let repo;
let connection;

beforeAll(async () => {
  repo = new CoffeeMachineRepository();
  connection = await createConnection()
    .catch((e) => {
      console.log(`[error connection to mongoose] ${e}`);
    });
});

afterAll(async () => {
  connection.disconnect();
});

describe('given FindCoffeeMachine use-case class', () => {
  it('should get all items without params', async () => {
    const result: Response = await new FindCoffeeMachines(repo).exec();
    expect(result.getResponse().payload.length).toBe(9);
    expect(result.getResponse().payload[0]).toHaveProperty('sku');
  });

  it('should be able to get the correct filtered data (get large machines)', async () => {
    const result: Response = await new FindCoffeeMachines(
      repo,
      { productType: CoffeeMachineType.COFFEE_MACHINE_LARGE },
    ).exec();
    expect(result.getResponse().payload.length).toBe(3);
    expect(result.getResponse().payload[0]).toHaveProperty('sku');
  });
});
