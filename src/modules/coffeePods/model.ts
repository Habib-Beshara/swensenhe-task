import { Schema, model } from 'mongoose';
import CoffeePodType from './abstracts/CoffeePodType';
import CoffeeFlavor from './abstracts/CoffeeFlavor';

const coffeePodSchema = new Schema({
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  productType: {
    type: String,
    enum: CoffeePodType,
    required: true,
  },
  coffeeFlavor: {
    type: String,
    enum: CoffeeFlavor,
    required: true,
  },
  packSize: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const coffeePodModel = model('CoffeePod', coffeePodSchema);

export default coffeePodModel;
