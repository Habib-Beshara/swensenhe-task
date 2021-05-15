import CoffeePodType from '../modules/coffeePods/abstracts/CoffeePodType';
import CoffeeFlavor from '../modules/coffeePods/abstracts/CoffeeFlavor';
import PackSize from '../modules/coffeePods/abstracts/PackSize';
import createConnection from '../services/dbConnection';
import coffeePodModel from '../modules/coffeePods/model';

const podsData = [
  {
    sku: 'CP001',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.ONE_DOZEN,
    description: 'small coffee pod, 1 dozen, vanilla',
  },
  {
    sku: 'CP003',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.THREE_DOZEN,
    description: 'small coffee pod, 3 dozen, vanilla',
  },
  {
    sku: 'CP011',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.ONE_DOZEN,
    description: 'small coffee pod, 1 dozen, caramel',
  },
  {
    sku: 'CP013',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.THREE_DOZEN,
    description: 'small coffee pod, 3 dozen, caramel',
  },
  {
    sku: 'CP021',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.ONE_DOZEN,
    description: 'small coffee pod, 1 dozen, psl',
  },
  {
    sku: 'CP023',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_PSL,
    packSize: PackSize.THREE_DOZEN,
    description: 'small coffee pod, 3 dozen, psl',
  },
  {
    sku: 'CP031',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_MOCHA,
    packSize: PackSize.ONE_DOZEN,
    description: 'small coffee pod, 1 dozen, mocha',
  },
  {
    sku: 'CP033',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_MOCHA,
    packSize: PackSize.THREE_DOZEN,
    description: 'small coffee pod, 3 dozen, mocha',
  },
  {
    sku: 'CP041',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_HAZELNUT,
    packSize: PackSize.ONE_DOZEN,
    description: 'small coffee pod, 1 dozen, hazelnut',
  },
  {
    sku: 'CP043',
    productType: CoffeePodType.COFFEE_POD_SMALL,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_HAZELNUT,
    packSize: PackSize.THREE_DOZEN,
    description: 'small coffee pod, 3 dozen, hazelnut',
  },
  {
    sku: 'CP101',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.ONE_DOZEN,
    description: 'large coffee pod, 1 dozen, vanilla',
  },
  {
    sku: 'CP103',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.THREE_DOZEN,
    description: 'large coffee pod, 3 dozen, vanilla',
  },
  {
    sku: 'CP111',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.ONE_DOZEN,
    description: 'large coffee pod, 1 dozen, caramel',
  },
  {
    sku: 'CP113',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.THREE_DOZEN,
    description: 'large coffee pod, 3 dozen, caramel',
  },
  {
    sku: 'CP121',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_PSL,
    packSize: PackSize.ONE_DOZEN,
    description: 'large coffee pod, 1 dozen, psl',
  },
  {
    sku: 'CP123',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_PSL,
    packSize: PackSize.THREE_DOZEN,
    description: 'large coffee pod, 3 dozen, psl',
  },
  {
    sku: 'CP131',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_MOCHA,
    packSize: PackSize.ONE_DOZEN,
    description: 'large coffee pod, 1 dozen, mocha',
  },
  {
    sku: 'CP133',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_MOCHA,
    packSize: PackSize.THREE_DOZEN,
    description: 'large coffee pod, 3 dozen, mocha',
  },
  {
    sku: 'CP141',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_HAZELNUT,
    packSize: PackSize.ONE_DOZEN,
    description: 'large coffee pod, 1 dozen, hazelnut',
  },
  {
    sku: 'CP143',
    productType: CoffeePodType.COFFEE_POD_LARGE,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_HAZELNUT,
    packSize: PackSize.THREE_DOZEN,
    description: 'large coffee pod, 3 dozen, hazelnut',
  },
  {
    sku: 'EP003',
    productType: CoffeePodType.ESPRESSO_POD,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.THREE_DOZEN,
    description: 'espresso pod, 3 dozen, vanilla',
  },
  {
    sku: 'EP005',
    productType: CoffeePodType.ESPRESSO_POD,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.FIVE_DOZEN,
    description: 'espresso pod, 5 dozen, vanilla',
  },
  {
    sku: 'EP007',
    productType: CoffeePodType.ESPRESSO_POD,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_VANILLA,
    packSize: PackSize.SEVEN_DOZEN,
    description: 'espresso pod, 7 dozen, vanilla',
  },
  {
    sku: 'EP013',
    productType: CoffeePodType.ESPRESSO_POD,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.THREE_DOZEN,
    description: 'espresso pod, 3 dozen, caramel',
  },
  {
    sku: 'EP015',
    productType: CoffeePodType.ESPRESSO_POD,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.FIVE_DOZEN,
    description: 'espresso pod, 5 dozen, caramel',
  },
  {
    sku: 'EP017',
    productType: CoffeePodType.ESPRESSO_POD,
    coffeeFlavor: CoffeeFlavor.COFFEE_FLAVOR_CARAMEL,
    packSize: PackSize.SEVEN_DOZEN,
    description: 'espresso pod, 7 dozen, caramel',
  },
];

const seedPods = () => {
  createConnection()
    .then(() => {
      coffeePodModel.insertMany(podsData)
        .then(() => {
          console.log('Seeding coffee pods completed successfully!');
        })
        .catch((e) => {
          console.log(`[error seeding coffee pods] ${e}`);
        });
    });
};

export default seedPods;
