import CoffeeMachineType from '../modules/coffeeMachines/abstracts/CoffeeMachineType';
import createConnection from '../services/dbConnection';
import coffeeMachineModel from '../modules/coffeeMachines/model';

const machinesData = [
  {
    sku: 'CM001',
    productType: CoffeeMachineType.COFFEE_MACHINE_SMALL,
    waterLineCompatible: false,
    description: 'small machine, base model',

  },
  {
    sku: 'CM002',
    productType: CoffeeMachineType.COFFEE_MACHINE_SMALL,
    waterLineCompatible: false,
    description: 'small machine, premium model',

  },
  {
    sku: 'CM003',
    productType: CoffeeMachineType.COFFEE_MACHINE_SMALL,
    waterLineCompatible: true,
    description: 'small machine, deluxe model, water line compatible',

  },
  {
    sku: 'CM101',
    productType: CoffeeMachineType.COFFEE_MACHINE_LARGE,
    waterLineCompatible: false,
    description: 'large machine, base model',

  },
  {
    sku: 'CM102',
    productType: CoffeeMachineType.COFFEE_MACHINE_LARGE,
    waterLineCompatible: true,
    description: 'large machine, premium model, water line compatible',

  },
  {
    sku: 'CM103',
    productType: CoffeeMachineType.COFFEE_MACHINE_LARGE,
    waterLineCompatible: true,
    description: 'large machine, deluxe model, water line compatible',

  },
  {
    sku: 'EM001',
    productType: CoffeeMachineType.ESPRESSO_MACHINE,
    waterLineCompatible: false,
    description: 'espresso machine, base model',

  },
  {
    sku: 'EM002',
    productType: CoffeeMachineType.ESPRESSO_MACHINE,
    waterLineCompatible: false,
    description: 'espresso machine, premium model',

  },
  {
    sku: 'EM003',
    productType: CoffeeMachineType.ESPRESSO_MACHINE,
    waterLineCompatible: true,
    description: 'espresso machine, deluxe model, water line compatible',

  },
];

const seedMachines = () => {
  createConnection()
    .then(() => {
      coffeeMachineModel.insertMany(machinesData)
        .then(() => {
          console.log('Seeding coffee machines completed successfully!');
        })
        .catch((e) => {
          console.log(`[error seeding coffee machines] ${e}`);
        });
    });
};

export default seedMachines;
