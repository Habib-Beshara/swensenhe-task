import FindCoffeePods
  from '../../../../src/modules/coffeePods/use-cases/findCoffeePods';
import createConnection from '../../../../src/services/dbConnection';
import Response from '../../../../src/services/response';
import CoffeePodRepository from '../../../../src/modules/coffeePods/repository';
import CoffeePodType from '../../../../src/modules/coffeePods/abstracts/CoffeePodType';
import CoffeeFlavor from '../../../../src/modules/coffeePods/abstracts/CoffeeFlavor';

let repo;
let connection;

beforeAll(async () => {
  repo = new CoffeePodRepository();
  connection = await createConnection()
    .catch((e) => {
      console.log(`[error connection to mongoose] ${e}`);
    });
});

afterAll(async () => {
  connection.disconnect();
});

describe('given FindCoffeePod use-case class', () => {
  it('should get all items without params', async () => {
    const result: Response = await new FindCoffeePods(repo).exec();
    expect(result.getResponse().payload.length).toBe(26);
    expect(result.getResponse().payload[0]).toHaveProperty('sku');
  });

  it('should be able to get the correct filtered data (get large machines)', async () => {
    const result: Response = await new FindCoffeePods(
      repo,
      { productType: CoffeePodType.COFFEE_POD_LARGE },
    ).exec();
    expect(result.getResponse().payload.length).toBe(10);
    expect(result.getResponse().payload[0]).toHaveProperty('sku');
  });

  it('should get the correct filtered data (espresso vanilla pods)', async () => {
    const result: Response = await new FindCoffeePods(
      repo,
      {
        productType: CoffeePodType.ESPRESSO_POD,
        coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
      },
    ).exec();
    expect(result.getResponse().payload.length).toBe(3);
    expect(result.getResponse().payload[0]).toHaveProperty('sku');
  });
});
