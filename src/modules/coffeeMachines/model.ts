import { Schema, model } from 'mongoose';
import CoffeeMachineType from './abstracts/CoffeeMachineType';

const coffeeMachineSchema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  productType: {
    type: String,
    enum: CoffeeMachineType,
    required: true,
  },
  waterLineCompatible: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
});

const coffeeMachineModel = model('CoffeeMachine', coffeeMachineSchema);

export default coffeeMachineModel;
